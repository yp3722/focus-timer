export const logUserInteraction = async (user_action, details) => {
    try {
      const response = await fetch('http://localhost:8000/api/telemetery/user-interactions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_action,
          details,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      //console.log('User interaction logged:', data);
    } catch (error) {
      console.error('Error logging user interaction:', error);
    }
  };


export const logDeviceInfo = async () => {
    const deviceInfo = {
      device_type: navigator.userAgent.includes('Mobi') ? 'Mobile' : 'Desktop',
      operating_system: navigator.platform,
      browser_version: navigator.userAgent,
      timestamp: new Date().toISOString()
    };
    //console.log('deviceInfo:', JSON.stringify(deviceInfo, null, 2));
    try {
      const response = await fetch('http://localhost:8000/api/telemetery/device-info/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(deviceInfo),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      //console.log('Device info logged:', data);
    } catch (error) {
      console.error('Error logging device info:', error);
    }
  };