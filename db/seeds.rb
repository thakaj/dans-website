# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
taulant = Student.create(first_name: "taulant", last_name: "hakaj", email: "thakaj@aol.com", password: "password", password_confirmation: "password")
inst = Instrument.create(name: "Bass")
appt  = Appointment.create(time: "2021-10-1", student_id: 1, remote: false, location: "studio", instrument_id: 1)
