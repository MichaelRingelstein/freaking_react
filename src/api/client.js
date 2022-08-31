import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://enjfluqpxlkzugjmcvkn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuamZsdXFweGxrenVnam1jdmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3MDI5MDUsImV4cCI6MTk3NzI3ODkwNX0.AO4NFmJ5j__3tJJz4G50nIdPPhreNB764Cb1UWUWCY4"
);
