document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelector('input[type="password"]').value.trim();

        if (email === "admin@gmail.com" && password === "admin123") {
            // alert("مرحباً أيها الأدمن!");
            window.location.href = "./admin.html"; 
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // alert("تم تسجيل الدخول بنجاح!");
            
            localStorage.setItem("currentUserEmail", user.email);
            window.location.href = "./index.html"; 
        } else {
            alert("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
        }
    });
});
