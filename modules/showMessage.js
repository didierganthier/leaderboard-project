const showMessage = (message, classToRemove, classToAdd, innerHTML) => {
  message.classList.remove(classToRemove);
  message.classList.add(classToAdd);
  message.innerHTML = innerHTML;
  setTimeout(() => {
    message.classList.remove(classToAdd);
    message.innerHTML = '';
  }, 3000);
};

export default showMessage;