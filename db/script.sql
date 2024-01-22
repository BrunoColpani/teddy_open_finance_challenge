CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT null unique,
    password VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
			
CREATE TABLE IF NOT EXISTS public.shortened_urls (
    id SERIAL PRIMARY KEY,
    original_url VARCHAR NOT NULL,
    short_url VARCHAR UNIQUE NOT NULL,
    click_count INT NOT NULL DEFAULT 0,
	user_id INT NOT NULL, 
    active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);