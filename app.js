// Registration Route
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if the email already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Server error' });
        }

        if (results.length > 0) {
            return res.status(409).json({ success: false, message: 'Email is already registered.' });
        }

        // Hash the password and save the user
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ success: false, message: 'Server error' });
                }
                res.json({ success: true });
            }
        );
    });
});
