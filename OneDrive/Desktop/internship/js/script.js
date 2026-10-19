/* =========================================
   ADVANCED CSS3 PORTFOLIO
   File: js/script.js
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- 1. LIGHT / DARK THEME ---------- */

    const themeToggle = document.querySelector(
        "#theme-toggle, #themeToggle, .theme-toggle"
    );

    const root = document.documentElement;

    // Restore the saved theme, or use the system preference.
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("portfolio-theme");
    } catch (error) {
        // The theme toggle will still work if storage is unavailable.
    }

    const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    function applyTheme(theme) {
        const isDark = theme === "dark";

        root.setAttribute("data-theme", theme);
        root.classList.toggle("dark-mode", isDark);
        root.classList.toggle("light-mode", !isDark);

        if (themeToggle) {
            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );

            themeToggle.setAttribute("aria-pressed", String(isDark));

            const icon = themeToggle.querySelector(
                "svg, i, .theme-icon"
            );

            if (icon) {
                icon.textContent = isDark ? "☀️" : "🌙";
            } else {
                themeToggle.textContent = isDark
                    ? "☀️ Light mode"
                    : "🌙 Dark mode";
            }
        }
    }

    const initialTheme =
        savedTheme === "dark" || savedTheme === "light"
            ? savedTheme
            : systemPrefersDark
                ? "dark"
                : "light";

    applyTheme(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme =
                root.getAttribute("data-theme") || "light";

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            applyTheme(newTheme);

            try {
                localStorage.setItem("portfolio-theme", newTheme);
            } catch (error) {
                // Theme changes still work for this page session.
            }
        });
    }


    /* ---------- 2. MOBILE NAVIGATION ---------- */

    const menuToggle = document.querySelector(
        "#menu-toggle, #menuToggle, .menu-toggle"
    );

    const navigation = document.querySelector(
        "#nav-menu, #navMenu, .nav-links, nav ul"
    );

    if (menuToggle && navigation) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", () => {
            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            navigation.classList.toggle("active", !isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Open navigation menu" : "Close navigation menu"
            );
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.setAttribute("aria-expanded", "false");
                navigation.classList.remove("active");
            });
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                menuToggle.setAttribute("aria-expanded", "false");
                navigation.classList.remove("active");
                menuToggle.focus();
            }
        });
    }


    /* ---------- 3. SMOOTH SCROLLING ---------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches ? "auto" : "smooth",
                    block: "start"
                });
            }
        });
    });


    /* ---------- 4. CURRENT YEAR IN FOOTER ---------- */

    const yearElement = document.querySelector(
        "#current-year, #currentYear, .current-year"
    );

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* ---------- 5. CONTACT FORM VALIDATION ---------- */

    const contactForm = document.querySelector(
        "#contact-form, #contactForm, form[data-contact-form]"
    );

    if (contactForm) {
        const emailInput = contactForm.querySelector(
            'input[type="email"]'
        );

        const nameInput = contactForm.querySelector(
            'input[name="name"], input[name="fullName"], #name'
        );

        const messageInput = contactForm.querySelector(
            'textarea[name="message"], #message, textarea'
        );

        contactForm.addEventListener("submit", event => {
            let firstInvalidField = null;

            const fieldsToCheck = [
                nameInput,
                emailInput,
                messageInput
            ].filter(Boolean);

            fieldsToCheck.forEach(field => {
                field.setCustomValidity("");

                if (!field.value.trim()) {
                    field.setCustomValidity(
                        "Please complete this field."
                    );
                } else if (
                    field.type === "email" &&
                    !field.validity.valid
                ) {
                    field.setCustomValidity(
                        "Please enter a valid email address."
                    );
                }

                if (!field.validity.valid && !firstInvalidField) {
                    firstInvalidField = field;
                }
            });

            if (firstInvalidField) {
                event.preventDefault();
                firstInvalidField.reportValidity();
                firstInvalidField.focus();
            }
        });

        contactForm.querySelectorAll("input, textarea").forEach(field => {
            field.addEventListener("input", () => {
                field.setCustomValidity("");
            });
        });
    }


    /* ---------- 6. REVEAL ELEMENTS ON SCROLL ---------- */

    const revealElements = document.querySelectorAll(
        ".reveal, .fade-in"
    );

    if ("IntersectionObserver" in window && revealElements.length) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }

});