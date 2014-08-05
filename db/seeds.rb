# Initial seed file to use with Devise User Model

# Temporary admin account
case Rails.env
unless 'production'
  u = User.new(
      email: "admin@example.com",
      password: "1234",
      password_confirmation: "1234",
      admin: true,
      first_name: "Admin",
      last_name: "Admin",
      college: "ccc"
  )
  u.skip_confirmation!
  u.save!
  
  
  
  # Test user accounts
  (1..50).each do |i|
    u = User.new(
        email: "user#{i}@example.com",
        password: "1234",
        password_confirmation: "1234",
        first_name: "first_name#{i}",
        last_name: "last_name#{i}",
        college: "ccc"
    )
    u.skip_confirmation!
    u.save!
  
    puts "#{i} test users created..." if (i % 5 == 0)
  
  end
end
    
  
