document.addEventListener("DOMContentLoaded", function () {

    // ================= DATE =================

    const dateInput = document.getElementById("bookingDate");

    if (dateInput) {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        dateInput.min = `${year}-${month}-${day}`;
    }


    // ================= RESERVATION FORM =================

    const form =
        document.getElementById("reservationForm");

    const message =
        document.getElementById("reservationMessage");


    if (form && message) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                    .getElementById("guestName")
                    .value
                    .trim();


                const date =
                    document
                    .getElementById("bookingDate")
                    .value;


                const time =
                    document
                    .getElementById("bookingTime")
                    .value;


                const guests =
                    document
                    .getElementById("guestCount")
                    .value;


                if (
                    !name ||
                    !date ||
                    !time ||
                    !guests
                ) {

                    return;

                }


                const formattedDate =
                    new Date(
                        `${date}T00:00:00`
                    ).toLocaleDateString(
                        "en-US",
                        {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                    );


                message.textContent =
                    `Thank you, ${name}! Your table request for ${guests.toLowerCase()} on ${formattedDate} at ${time} has been received. NOIRÉ Coffee House will contact you to confirm your reservation.`;


                message.classList.add("show");


                form.reset();


                message.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    // ================= SMOOTH SCROLL =================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });

});