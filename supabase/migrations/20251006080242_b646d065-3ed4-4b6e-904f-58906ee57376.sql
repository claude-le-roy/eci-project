-- Add date_of_birth column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN date_of_birth DATE;

-- Update the handle_new_user function to include date_of_birth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (
    user_id, 
    first_name, 
    last_name, 
    username,
    phone_number,
    country_of_birth,
    city_of_residence,
    user_type,
    date_of_birth
  )
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name', 
    NEW.raw_user_meta_data ->> 'username',
    NEW.raw_user_meta_data ->> 'phone_number',
    NEW.raw_user_meta_data ->> 'country_of_birth',
    NEW.raw_user_meta_data ->> 'city_of_residence',
    NEW.raw_user_meta_data ->> 'user_type',
    (NEW.raw_user_meta_data ->> 'date_of_birth')::DATE
  );
  RETURN NEW;
END;
$function$;