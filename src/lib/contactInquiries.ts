import { supabase } from '@/lib/supabase';

export type ContactInquiryInput = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export async function submitContactInquiry(input: ContactInquiryInput): Promise<string | null> {
  const { error } = await supabase.from('contact_inquiries').insert({
    name: input.name,
    email: input.email,
    company: input.company || null,
    service: input.service || null,
    message: input.message,
  });

  return error ? error.message : null;
}
