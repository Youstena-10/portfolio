
document.addEventListener("DOMContentLoaded", () => {

    const logoutBtn = document.getElementById("logoutBtn");

    // التحقق من تسجيل الدخول
    const currentEmail = localStorage.getItem("currentUserEmail");
    if (!currentEmail) {
        // لو المستخدم مش مسجل دخول، يرجع على صفحة login
        window.location.href = "./login.html";
        return;
    }

    // ربط زر Logout بالوظيفة
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            logout();
        });
    }

    // باقي الكود (تحميل البيانات، تغيير الصورة، تعديل البيانات..)
    loadUserData();
});

document.addEventListener("DOMContentLoaded", () => {

    const changePhotoBtn = document.getElementById("changePhotoBtn");
    const imageInput = document.getElementById("imageInput");
    const profileImage = document.getElementById("profileImage");
    const logoutBtn = document.getElementById("logoutBtn");

    // كل الحقول فاضية افتراضياً
    setProfileEmpty();

    // تسجيل الخروج
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }

    // التحقق من تسجيل الدخول
    const currentEmail = localStorage.getItem("currentUserEmail");
    if (currentEmail) {
        loadUserData();
    }

    // تغيير صورة البروفايل
    changePhotoBtn.addEventListener("click", () => {
        imageInput.click();
    });

    imageInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                saveUserData();
            };
            reader.readAsDataURL(file);
        }
    });

    // تسجيل الدخول (إذا موجود فورم)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = form.querySelector('input[type="email"]').value.trim();
            const password = form.querySelector('input[type="password"]').value.trim();

            if (email === "admin@gmail.com" && password === "admin123") {
                window.location.href = "./admin.html"; 
                return;
            }

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem("currentUserEmail", user.email);
                window.location.href = "./index.html"; 
            } else {
                alert("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
            }
        });
    }

});

// وضع الصفحة فارغة
function setProfileEmpty() {
    document.getElementById('firstName').textContent = "";
    document.getElementById('lastName').textContent = "";
    document.getElementById('email').textContent = "";
    document.getElementById('personalPhone').textContent = "";
    document.getElementById('country').textContent = "";
    document.getElementById('cityState').textContent = "";
    document.getElementById('fullName').textContent = "";
    document.getElementById('profilePhone').textContent = "";
    document.getElementById('profileImage').src = "./img/default-profile.png";
}

// فتح مودال التعديل
function openModal(section) {
    let modalContent = '';

    if (section === 'personal') {
        modalContent = `
            <div class="modal fade" id="personalModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header"><h5>Edit Personal Information</h5></div>
                        <div class="modal-body">
                            <input type="text" id="modalFirstName" class="form-control mb-2" value="${document.getElementById('firstName').textContent}">
                            <input type="text" id="modalLastName" class="form-control mb-2" value="${document.getElementById('lastName').textContent}">
                            <input type="email" id="modalEmail" class="form-control mb-2" value="${document.getElementById('email').textContent}">
                            <input type="text" id="modalPersonalPhone" class="form-control mb-2" value="${document.getElementById('personalPhone').textContent}">
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button class="btn btn-primary" onclick="savePersonal()">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (section === 'address') {
        modalContent = `
            <div class="modal fade" id="addressModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header"><h5>Edit Address</h5></div>
                        <div class="modal-body">
                            <input type="text" id="modalCountry" class="form-control mb-2" value="${document.getElementById('country').textContent}">
                            <input type="text" id="modalCityState" class="form-control" value="${document.getElementById('cityState').textContent}">
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button class="btn btn-primary" onclick="saveAddress()">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById('modalsContainer').innerHTML = modalContent;
    const modalId = section + 'Modal';
    new bootstrap.Modal(document.getElementById(modalId)).show();
}

// حفظ بيانات personal
function savePersonal() {
    const firstName = document.getElementById('modalFirstName').value;
    const lastName = document.getElementById('modalLastName').value;
    const email = document.getElementById('modalEmail').value;
    const phone = document.getElementById('modalPersonalPhone').value;

    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName;
    document.getElementById('email').textContent = email;
    document.getElementById('personalPhone').textContent = phone;

    document.getElementById('fullName').textContent = firstName + " " + lastName;
    document.getElementById('profilePhone').textContent = phone;

    saveUserData();
    bootstrap.Modal.getInstance(document.getElementById('personalModal')).hide();
}

// حفظ بيانات address
function saveAddress() {
    document.getElementById('country').textContent = document.getElementById('modalCountry').value;
    document.getElementById('cityState').textContent = document.getElementById('modalCityState').value;

    saveUserData();
    bootstrap.Modal.getInstance(document.getElementById('addressModal')).hide();
}

// حفظ البيانات في localStorage
function saveUserData() {
    const currentEmail = localStorage.getItem("currentUserEmail");
    if (!currentEmail) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let index = users.findIndex(u => u.email === currentEmail);

    if (index !== -1) {
        users[index] = {
            ...users[index],
            fullName: document.getElementById('firstName').textContent + " " + document.getElementById('lastName').textContent,
            email: document.getElementById('email').textContent,
            phone: document.getElementById('personalPhone').textContent,
            country: document.getElementById('country').textContent,
            cityState: document.getElementById('cityState').textContent,
            image: document.getElementById('profileImage').src
        };
        localStorage.setItem("users", JSON.stringify(users));
    }
}

// تحميل بيانات المستخدم
function loadUserData() {
    const currentEmail = localStorage.getItem("currentUserEmail");
    if (!currentEmail) {
        setProfileEmpty();
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(u => u.email === currentEmail);

    if (currentUser) {
        const [firstName, lastName] = currentUser.fullName.split(" ");
        document.getElementById('firstName').textContent = firstName || "";
        document.getElementById('lastName').textContent = lastName || "";
        document.getElementById('email').textContent = currentUser.email;
        document.getElementById('personalPhone').textContent = currentUser.phone || "";
        document.getElementById('country').textContent = currentUser.country || "";
        document.getElementById('cityState').textContent = currentUser.cityState || "";
        document.getElementById('fullName').textContent = currentUser.fullName;
        document.getElementById('profilePhone').textContent = currentUser.phone || "";
        document.getElementById('profileImage').src = currentUser.image || "./img/default-profile.png";
    }
}

// زر Logout
function logout() {
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("checkoutItems");
    window.location.href = "./login.html";
}
