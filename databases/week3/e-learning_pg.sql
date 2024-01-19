CREATE TYPE user_type AS ENUM ('Student', 'Mentor');
CREATE TYPE course_category AS ENUM ('Personal', 'Finance', 'Professional');

CREATE TABLE users (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	uid VARCHAR(255) UNIQUE NOT NULL,
	user_type user_type NOT NULL
);

CREATE TABLE course (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	course_title VARCHAR(255) NOT NULL,
	course_description TEXT NOT NULL,
	course_category course_category NOT NULL,
	course_price DECIMAL (10,2) NOT NULL,
	course_image VARCHAR(255) NOT NULL,
	sales_image VARCHAR(255) NOT NULL,
	key_learning VARCHAR(255) NOT NULL,
	mentor INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE lesson (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	lesson_title VARCHAR(255) NOT NULL,
	lesson_description TEXT NOT NULL,
	lesson_image VARCHAR(255) NOT NULL,
	course_id INT NOT NULL REFERENCES course(id) ON DELETE CASCADE
);

CREATE TABLE resource (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	lesson_resources VARCHAR(255) NOT NULL,
	lesson_id INT NOT NULL REFERENCES lesson(id) ON DELETE CASCADE
);

CREATE TABLE faq (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	course_id INT NOT NULL REFERENCES course(id) ON DELETE CASCADE,
	faq VARCHAR(255) NOT NULL,
	faq_answer TEXT NOT NULL
);

CREATE TABLE student_course (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	course_id INT NOT NULL REFERENCES course(id) ON DELETE CASCADE,
	student_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
