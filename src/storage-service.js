export const saveCurrentIndex = (index) => {
    localStorage.setItem('fibonaccier', index);
};

export const getCurrentIndex = () => localStorage.getItem('fibonaccier') || 1;
