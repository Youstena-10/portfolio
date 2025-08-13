document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const password = form.querySelectorAll('input[type="password"]')[0].value.trim();
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value.trim();

        if (password !== confirmPassword) {
            alert("كلمة المرور وتأكيد كلمة المرور غير متطابقين!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(user => user.email === email)) {
            alert("هذا البريد الإلكتروني مسجل بالفعل!");
            return;
        }

        users.push({ fullName, email, phone, password, image: "" });
        localStorage.setItem("users", JSON.stringify(users));

        alert("تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.");
        window.location.href = "./login.html";
    });
});
