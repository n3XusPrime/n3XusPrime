// posts.js

const posts = [
    {
        id: 1,
        slug: 'setting-up-a-secure-linux-lab',
        title: 'Setting Up a Secure Linux Lab',
        description: 'A comprehensive guide to setting up a secure Linux lab environment for cybersecurity training...',
        tags: '#Linux #Cybersecurity #LabSetup',
        date: 'June 22, 2025',
        image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Secure+Linux+Lab',
        featured: true
    },
    {
        id: 2,
        slug: 'network-traffic-analysis-with-wireshark',
        title: 'Network Traffic Analysis with Wireshark',
        description: 'Deep dive into using Wireshark to analyze network traffic, identify anomalies, and troubleshoot issues...',
        tags: '#Networking #Wireshark #PacketAnalysis',
        date: 'June 15, 2025',
        image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Wireshark+Analysis',
        featured: true
    },
    {
        id: 3,
        slug: 'exploring-open-source-intelligence-tools',
        title: 'Exploring OSINT Tools',
        description: 'An overview of powerful OSINT tools and techniques used for information gathering...',
        tags: '#OSINT #Cybersecurity #InfoGathering',
        date: 'June 8, 2025',
        image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=OSINT+Tools',
        featured: true
    },
    {
        id: 4,
        slug: 'demystifying-firewall-rules',
        title: 'Demystifying Firewall Rules',
        description: 'Understanding how firewalls work, common rule sets, and best practices for configuration...',
        tags: '#Networking #Firewall #Security',
        date: 'June 1, 2025',
        image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Firewall+Rules',
        featured: true
    },
    // Add date and image for the rest of the posts as well
    { id: 5, slug: 'intro-to-ethical-hacking', title: 'Introduction to Ethical Hacking', description: 'An introductory guide...', tags: '#EthicalHacking #PenTesting', date: 'May 25, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Ethical+Hacking', featured: false },
    { id: 6, slug: 'virtual-machine-hardening.md', title: 'Virtual Machine Hardening', description: 'Best practices for securing virtual machines...', tags: '#Virtualization #Security #VMware', date: 'May 18, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=VM+Hardening', featured: false },
    { id: 7, slug: 'basics-of-digital-forensics', title: 'The Basics of Digital Forensics', description: 'Learn about the core principles of digital forensics...', tags: '#Forensics #IncidentResponse', date: 'May 11, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Digital+Forensics', featured: false },
    { id: 8, slug: 'securing-cloud-environments', title: 'Securing Cloud Environments', description: 'An overview of security best practices for major cloud platforms...', tags: '#CloudSecurity #AWS #Azure', date: 'May 4, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Cloud+Security', featured: false },
    { id: 9, slug: 'python-for-cybersecurity', title: 'Python for Cybersecurity', description: 'Discover how Python scripting can be used to automate security tasks...', tags: '#Python #Automation #Scripting', date: 'April 27, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Python+Scripting', featured: false },
    { id: 10, slug: 'understanding-common-malware', title: 'Understanding Common Malware', description: 'A breakdown of different malware types...', tags: '#Malware #ThreatIntel', date: 'April 20, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Malware+Analysis', featured: false },
    { id: 11, slug: 'social-engineering-tactics', title: 'Social Engineering Tactics', description: 'Exploring psychological manipulation techniques...', tags: '#SocialEngineering #SecurityAwareness', date: 'April 13, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Social+Engineering', featured: false },
    { id: 12, slug: 'cryptography-fundamentals', title: 'Cryptography Fundamentals', description: 'A primer on the basics of cryptography...', tags: '#Cryptography #Encryption', date: 'April 6, 2025', image: 'https://placehold.co/1200x600/2d3748/38b2ac?text=Cryptography', featured: false }
];
