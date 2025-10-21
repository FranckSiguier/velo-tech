CREATE TABLE `image` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`blob_key` text NOT NULL,
	`file_name` text NOT NULL,
	`file_size` integer NOT NULL,
	`mime_type` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
