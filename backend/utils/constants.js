
module.exports = {
  WIPING_METHODS: [
    { name: 'DoD 5220.22-M', passes: 3, securityLevel: 'High' },
    { name: 'NIST SP 800-88 Clear', passes: 1, securityLevel: 'Medium' },
    { name: 'NIST SP 800-88 Purge', passes: 3, securityLevel: 'Very High' },
    { name: 'Gutmann 35-Pass', passes: 35, securityLevel: 'Maximum' },
  ],
};
