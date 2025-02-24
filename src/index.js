let showItem = document.querySelectorAll(".toggle-class")
function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  // SVG for Down icon
  const downSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // SVG for Up icon
  const upSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    icon.innerHTML = upSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerHTML = downSVG;
  }
}
showItem.forEach((item) => {
        item.addEventListener("click", () => {
            console.log(item)
        })
    })











let activeButton = null; // برای ذخیره دکمه فعال فعلی

function changeColor(button) {
    // اگر دکمه‌ای از قبل فعال باشد، رنگ آن را به حالت اولیه برگردان
    if (activeButton) {
        activeButton.classList.remove('bg-blue-500', 'text-white');
        activeButton.classList.add('bg-gray-200', 'text-black');
    }

    // اگر دکمه کلیک‌شده همان دکمه فعال فعلی نباشد، آن را فعال کن
    if (activeButton !== button) {
        button.classList.remove('bg-gray-200', 'text-black');
        button.classList.add('bg-blue-500', 'text-white');
        activeButton = button; // دکمه جدید را به عنوان دکمه فعال تنظیم کن
    } else {
        // اگر دکمه کلیک‌شده همان دکمه فعال فعلی باشد، آن را غیرفعال کن
        activeButton = null;
    }
}




function toggleDropdown() {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('hidden');
    }

    function selectOption(option, color) {
        const button = document.getElementById('a1');
        button.innerHTML = option + ' <span id="icon-1" class="text-green-400-800 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" /></svg></span>';

        // تغییر رنگ دکمه بر اساس انتخاب
        if (color === 'green') {
            button.classList.remove('bg-red-500', 'text-red-100');
            button.classList.add('bg-green-500', 'text-green-100');
        } else if (color === 'red') {
            button.classList.remove('bg-green-500', 'text-green-100');
            button.classList.add('bg-red-500', 'text-red-100');
        }

        toggleDropdown(); // بستن dropdown پس از انتخاب
    }
