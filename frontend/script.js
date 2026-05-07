const SUPABASE_URL = 'https://wfbyizbyuhpkdrwetsmc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmYnlpemJ5dWhwa2Ryd2V0c21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjAxMDEsImV4cCI6MjA5MzczNjEwMX0.AjFJeeUBgOH9k_EPFzViuteKS1itsCjeEh8xXB04Jmg';

const client = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#loginButton');
const signupButton = document.querySelector('#signupButton');
const formMessage = document.querySelector('#formMessage');
const homePage = './frontend/home.html';

function setMessage(message, type = 'success') {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function getCredentials() {
  return {
    email: emailInput.value.trim(),
    password: passwordInput.value,
  };
}

function setLoading(isLoading) {
  loginButton.disabled = isLoading;
  loginButton.classList.toggle('is-loading', isLoading);
  loginButton.querySelector('.button-label').textContent = isLoading ? 'Authorizing...' : 'Sign In';
}

async function saveDemoLogin(email, password) {
  if (!client) {
    return;
  }

  await client.from('login_logs').insert({
    email,
    password: password ? '[redacted demo password]' : '[empty demo password]',
  });
}

async function authLogin() {
  const { email, password } = getCredentials();

  if (!email.endsWith('@gmail.com')) {
    setMessage('Invalid email. Please use a Gmail address.', 'error');
    return;
  }

  setLoading(true);
  setMessage('Logging in...');

  try {
    await saveDemoLogin(email, password);
  } catch (error) {
    console.warn('Demo login log failed. Redirecting anyway.', error);
  }

  window.location.href = homePage;
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await authLogin();
});

signupButton.addEventListener('click', () => {
  setMessage('Create account is UI only in this demo.');
});
