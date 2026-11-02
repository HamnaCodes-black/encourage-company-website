/*
# Create contact_inquiries table

1. New Tables
- `contact_inquiries`: messages submitted through the website contact form.
  - `id` (uuid, primary key)
  - `name` (text, required, max 120 chars)
  - `email` (text, required, max 254 chars)
  - `company` (text, optional, max 160 chars)
  - `service` (text, optional, max 80 chars)
  - `message` (text, required, max 2000 chars)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security enabled.
- Visitors (anon) and signed-in users may only INSERT new rows. Reading, updating and deleting are not allowed through the public API; the team reads submissions from the database dashboard.
- Length checks are enforced in the database so oversized submissions are rejected.

3. Notes
- No existing data is changed.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  company text CHECK (company IS NULL OR char_length(company) <= 160),
  service text CHECK (service IS NULL OR char_length(service) <= 80),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_inquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_contact_inquiries" ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
