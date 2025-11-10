// Toast Notification System
class ToastManager {
  constructor() {
    this.container = this.createContainer();
    document.body.appendChild(this.container);
  }

  createContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    return container;
  }

  show(title, description, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const titleEl = document.createElement('div');
    titleEl.className = 'toast-title';
    titleEl.textContent = title;
    
    const descEl = document.createElement('div');
    descEl.className = 'toast-description';
    descEl.textContent = description;
    
    toast.appendChild(titleEl);
    toast.appendChild(descEl);
    this.container.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => {
        this.container.removeChild(toast);
      }, 300);
    }, duration);
  }
}

// Initialize toast manager
const toast = new ToastManager();

// Navigation highlighting
function initNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (
      (currentPage === 'index.html' && href === 'index.html') ||
      (currentPage === 'key-system.html' && href === 'key-system.html') ||
      (currentPage === 'download.html' && href === 'download.html') ||
      (currentPage === '' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
}

// Copy to clipboard functionality
function initCopyButton() {
  const copyBtn = document.getElementById('copy-key-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const keyText = this.previousElementSibling.textContent;
      navigator.clipboard.writeText(keyText).then(() => {
        const icon = this.querySelector('svg');
        icon.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>'; // Check icon
        toast.show('Key copied!', 'The demo key has been copied to your clipboard.');
        
        setTimeout(() => {
          icon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>'; // Copy icon
        }, 2000);
      });
    });
  }
}

// Key verification
function initKeyVerification() {
  const verifyBtn = document.getElementById('verify-key-btn');
  const keyInput = document.getElementById('key-input');
  
  if (verifyBtn && keyInput) {
    verifyBtn.addEventListener('click', function() {
      const keyValue = keyInput.value.trim();
      
      if (keyValue === '') {
        toast.show('Error', 'Please enter a key to verify.');
        return;
      }
      
      toast.show('Key verified!', 'Your access has been granted.');
      keyInput.value = '';
    });
    
    // Allow Enter key to verify
    keyInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        verifyBtn.click();
      }
    });
  }
}

// Download handlers
function initDownloadButtons() {
  const downloadBtns = document.querySelectorAll('[data-download]');
  
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const version = this.getAttribute('data-download');
      toast.show('Download started!', `Downloading RPN Mods ${version}...`);
    });
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initCopyButton();
  initKeyVerification();
  initDownloadButtons();
});
