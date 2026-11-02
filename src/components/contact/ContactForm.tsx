import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { serviceOptions } from '@/data/site';
import { submitContactInquiry, type ContactInquiryInput } from '@/lib/contactInquiries';

const emptyForm: ContactInquiryInput = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

type FormErrors = Partial<Record<keyof ContactInquiryInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactInquiryInput): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length > 120) errors.name = 'Name must be 120 characters or fewer.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(values.email.trim()) || values.email.trim().length > 254)
    errors.email = 'Please enter a valid email address.';

  if (values.company.length > 160) errors.company = 'Company name must be 160 characters or fewer.';

  if (!values.message.trim()) errors.message = 'Please tell us a little about your project.';
  else if (values.message.trim().length > 2000) errors.message = 'Message must be 2000 characters or fewer.';

  return errors;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass = (hasError: boolean) =>
  `field ${hasError ? '!border-rose-400 focus:!border-rose-500 focus:!ring-rose-100' : ''}`;

export default function ContactForm() {
  const [values, setValues] = useState<ContactInquiryInput>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  const updateField = (field: keyof ContactInquiryInput) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    setServerError('');
    const failure = await submitContactInquiry({
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      message: values.message.trim(),
    });

    if (failure) {
      setServerError('We could not send your message just now. Please try again in a moment.');
      setStatus('error');
      return;
    }

    setValues(emptyForm);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-cyan-200 bg-gradient-to-br from-white to-cyan-50 p-10 text-center shadow-xl shadow-cyan-500/10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h2 className="mt-6 text-2xl font-extrabold text-navy-900">Thank you, your message is on its way</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-500">
          A member of our team will review your details and get back to you with next steps.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-8">
          Send another message
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy-800">
            Full name <span className="text-royal-600">*</span>
          </span>
          <input
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={updateField('name')}
            className={fieldClass(Boolean(errors.name))}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="text-xs font-medium text-rose-600">{errors.name}</span>}
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy-800">
            Work email <span className="text-royal-600">*</span>
          </span>
          <input
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField('email')}
            className={fieldClass(Boolean(errors.email))}
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="text-xs font-medium text-rose-600">{errors.email}</span>}
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy-800">Company</span>
          <input
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={updateField('company')}
            className={fieldClass(Boolean(errors.company))}
            placeholder="Company name"
          />
          {errors.company && <span className="text-xs font-medium text-rose-600">{errors.company}</span>}
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy-800">Service of interest</span>
          <select value={values.service} onChange={updateField('service')} className={fieldClass(false)}>
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2">
        <span className="text-sm font-semibold text-navy-800">
          Project details <span className="text-royal-600">*</span>
        </span>
        <textarea
          rows={6}
          value={values.message}
          onChange={updateField('message')}
          className={`${fieldClass(Boolean(errors.message))} resize-y`}
          placeholder="Tell us about your goals, volumes and timelines."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="text-xs font-medium text-rose-600">{errors.message}</span>}
      </label>

      {status === 'error' && (
        <p role="alert" className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {serverError}
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-navy-400">Fields marked with * are required.</p>
        <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
