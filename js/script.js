// var amountElement = document.getElementById("amount");
// var amountValue = parseInt(amountElement.textContent);

// // تابع formatNumber برای تبدیل مبلغ به فرمت مناسب استفاده می‌شود
// function formatNumber(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// amountElement.textContent = formatNumber(amountValue) + " ریال";

var amountElement = document.getElementById("amount2");
        var amountValue = parseInt(amountElement.textContent);

        // تابع formatNumber برای تبدیل مبلغ به فرمت مناسب استفاده می‌شود
        function formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        amountElement.textContent = formatNumber(amountValue) + " ریال";

        // متغیرها
        const adsContainer = document.getElementById('ads-container');
        const loadMoreButton = document.getElementById('load-more-button');

        // تعداد آگهی‌هایی که هر بار نمایش داده می‌شوند
        const adsPerLoad = 6;

        // تعداد آگهی‌های نمایش داده شده
        let displayedAds = adsPerLoad;

        // اخفا کردن آگهی‌های اضافی در ابتدا
        const hiddenAds = Array.from(adsContainer.querySelectorAll('.card')).slice(displayedAds);
        hiddenAds.forEach(card => card.classList.add('hidden'));

        // اضافه کردن رویداد کلیک به دکمه "نمایش بیشتر"
        loadMoreButton.addEventListener('click', function () {
            // نمایش آگهی‌های بیشتر
            displayedAds += adsPerLoad;
            const adsToShow = Array.from(adsContainer.querySelectorAll('.hidden')).slice(0, adsPerLoad);
            adsToShow.forEach(card => card.classList.remove('hidden'));

            // اخفا دکمه اگر آگهی‌های بیشتری وجود نداشته باشد
            if (adsToShow.length === 0) {
                loadMoreButton.style.display = 'none';
            }
        });

        // // متغیر دکمه "ثبت آگهی"
        // const submitAdButton = document.getElementById('submit-ad-button');

        // // تعیین آدرس صفحه آگهی
        // const adPageURL = 'file:///G:/Html-Css-JS/newad.html'; // جایگزین آدرس واقعی صفحه آگهی خود

        // // اضافه کردن رویداد کلیک به دکمه "ثبت آگهی"
        // submitAdButton.addEventListener('click', function () {
        //     // انتقال به صفحه آگهی
        //     window.location.href = adPageURL;
        // });


const showButton = document.getElementById('showButton');
const overlay = document.getElementById('overlay');

const body = document.body;

showButton.addEventListener('click', function () {
    overlay.style.display = 'block';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Set background color to RGBA value
    body.style.pointerEvents = 'none'; // Disable pointer events for the body
    overlay.style.pointerEvents = 'auto'; // Enable pointer events for the overlay
});

overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
        overlay.style.display = 'none';
        body.style.backgroundColor = 'transparent'; // Reset background color to transparent
        body.style.pointerEvents = 'auto'; // Re-enable pointer events for the body
    }
});

function toggleFavorite(icon) {
    icon.classList.toggle("selected");
}
const openPopupButton = document.getElementById("openPopup");
        const closePopupButton = document.getElementById("closePopup");
        const contactPopup = document.getElementById("contactPopup");

        openPopupButton.addEventListener("click", function() {
            contactPopup.style.display = "block";
        });

        closePopupButton.addEventListener("click", function() {
            contactPopup.style.display = "none";
        });

        let isContactPopupOpen = false;

contactPopup.addEventListener("mousedown", function() {
    isContactPopupOpen = true;
});

window.addEventListener("mousedown", function(event) {
    if (!isContactPopupOpen && !event.target.matches('.contact-popup, .contact-popup *')) {
        contactPopup.style.display = "none";
    }
    isContactPopupOpen = false;
});
