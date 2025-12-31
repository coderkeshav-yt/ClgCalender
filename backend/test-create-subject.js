// Quick test to check subject creation
const axios = require('axios');

async function testCreateSubject() {
    try {
        // You'll need to get your auth token from the browser
        const token = 'YOUR_TOKEN_HERE'; // Replace this

        const response = await axios.post('http://localhost:5001/api/attendance/subject', {
            name: 'Test Subject',
            color: '#34D399',
            schedule: [{
                day: 'Mon',
                startTime: '09:00',
                endTime: '10:00'
            }]
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('✅ Success:', response.data);
    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
        console.error('❌ Status:', error.response?.status);
        console.error('❌ Full error:', error.response?.data);
    }
}

console.log('Note: You need to set your auth token first!');
console.log('Get it from browser: Application -> Local Storage -> supabase.auth.token');
// testCreateSubject();
