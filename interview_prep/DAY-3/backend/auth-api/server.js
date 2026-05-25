const express = require('express');
const app = express();


function authMiddleware(req, res, next) {
    
    const authHeader = req.headers.authorization
    
    
    if (!authHeader) {
        return res.status(401).json({ error: "Unauthorized access" })
    }
    
    
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Unauthorized access" })
    }
    
    
    const token = authHeader.substring(7)
    
    
    if (token !== 'secret123') {
        return res.status(401).json({ error: "Unauthorized access" })
    }
    
   
    next()
}


app.get('/public', (req, res) => {
    res.json({ message: "This is public - anyone can see this" })
})


app.get('/profile', authMiddleware, (req, res) => {
    res.json({
        name: "Student User",
        role: "Developer"
    })
})


app.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ 
        message: "Welcome to your dashboard!",
        data: "Some secret dashboard data here"
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
    console.log('\n--- HOW TO TEST ---')
    console.log('1. Public route (no token needed):')
    console.log('   http://localhost:3000/public\n')
    console.log('2. Profile route (needs token):')
    console.log('   Add header: Authorization: Bearer secret123\n')
    console.log('3. Dashboard route (needs same token):')
    console.log('   Add header: Authorization: Bearer secret123\n')
});