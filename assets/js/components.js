/* ==========================================================
   Shared page parts: HEADER, BOOKING MODAL (+toast), FOOTER
   Edit them here ONCE - every page updates automatically.
   Works when opening files directly AND on GitHub Pages.
   ========================================================== */
const SITE_COMPONENTS = {

/* ---------------- HEADER (announcement bar + navbar + mobile menu) ---------------- */
header: `
<!-- TOP ANNOUNCEMENT BANNER -->
<div class="bg-amber-500 text-slate-900 px-4 py-2 font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-inner">
    <span class="inline-block animate-pulse bg-red-600 text-white text-xs uppercase px-2 py-0.5 rounded-full font-bold">SPECIAL NOTICE</span>
    <span id="topBannerText" data-lang="topBannerText"> Every Thursday FREE OP Consultation at Vemulawada Clinic! Call +91 98765 43210 to reserve.</span>
</div>

<!-- MAIN NAVBAR -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Branding -->
            <a href="index.html" class="flex items-center space-x-3 ">
                <div class="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-amber-400">
                    <i class="fa-solid fa-bone text-amber-400 text-xl"></i>
                </div>
                <div>
                    <div class="text-lg sm:text-xl font-extrabold text-navy-900 leading-tight flex items-center gap-2">
                        <span>Dr. K. Sandeep Reddy</span>
                        <span class="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md hidden md:inline-block">MBBS, DNB Ortho</span>
                    </h1>
                    <p class="text-xs text-slate-600 font-medium">FIJR Joint Replacement & Trauma Surgeon | Ex-BIRRD Resident</p>
                </div>
            </div>

            <!-- Desktop Nav Links -->
            <nav class="hidden lg:flex items-center space-x-6 text-sm font-medium">
                <a href="index.html" class="inline-block nav-btn hover:text-blue-600 transition-colors py-2 text-slate-700 font-semibold" data-lang="navHome">Home</a>
                
                <!-- Services Dropdown -->
                <div class="relative group">
                    <button class="flex items-center space-x-1 py-2 text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">
                        <span data-lang="navServices">Services & Treatments</span>
                        <i class="fa-solid fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="absolute left-0 top-full hidden group-hover:grid grid-cols-2 w-[620px] max-h-[75vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 gap-2 z-50">
<a href="knee-replacement.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-person-walking-with-cane text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_knee_replacement_t">Knee Replacement Surgery</div>
        <div class="text-xs text-slate-500" data-lang="sv_knee_replacement_d">Total and partial knee replacement</div>
    </div>
</a>
<a href="hip-replacement.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-person-walking text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_hip_replacement_t">Hip Replacement</div>
        <div class="text-xs text-slate-500" data-lang="sv_hip_replacement_d">Total and bipolar hip replacement</div>
    </div>
</a>
<a href="shoulder-surgery.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-child-reaching text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_shoulder_surgery_t">Shoulder Surgery</div>
        <div class="text-xs text-slate-500" data-lang="sv_shoulder_surgery_d">Rotator cuff, dislocation and frozen shoulder</div>
    </div>
</a>
<a href="arthroscopy.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-microscope text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_arthroscopy_t">Arthroscopy Surgery</div>
        <div class="text-xs text-slate-500" data-lang="sv_arthroscopy_d">Keyhole joint surgery, faster recovery</div>
    </div>
</a>
<a href="spine-surgery.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-bone text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_spine_surgery_t">Spine Surgery</div>
        <div class="text-xs text-slate-500" data-lang="sv_spine_surgery_d">Disc slip, sciatica and back pain care</div>
    </div>
</a>
<a href="pediatric-ortho.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-baby text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_pediatric_ortho_t">Pediatric Orthopedic</div>
        <div class="text-xs text-slate-500" data-lang="sv_pediatric_ortho_d">Clubfoot, deformities and child fractures</div>
    </div>
</a>
<a href="tb-spine-hip-joint.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-bacterium text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_tb_spine_hip_joint_t">TB-Spine, TB-Hip, TB-Joint</div>
        <div class="text-xs text-slate-500" data-lang="sv_tb_spine_hip_joint_d">Tuberculosis of the spine, hip and joints</div>
    </div>
</a>
<a href="trauma-care.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-truck-medical text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_trauma_care_t">Trauma Care</div>
        <div class="text-xs text-slate-500" data-lang="sv_trauma_care_d">24/7 emergency fracture care</div>
    </div>
</a>
<a href="foot-ankle-surgery.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-shoe-prints text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_foot_ankle_surgery_t">Foot &amp; Ankle Surgery</div>
        <div class="text-xs text-slate-500" data-lang="sv_foot_ankle_surgery_d">Ankle, heel, bunion and flat foot care</div>
    </div>
</a>
<a href="hand-forearm-surgery.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-hand text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_hand_forearm_surgery_t">Hand &amp; Forearm</div>
        <div class="text-xs text-slate-500" data-lang="sv_hand_forearm_surgery_d">Wrist, hand and forearm fracture and tendon care</div>
    </div>
</a>
<a href="complex-fracture-trauma.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-x-ray text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_complex_fracture_trauma_t">Complex Fracture &amp; Trauma</div>
        <div class="text-xs text-slate-500" data-lang="sv_complex_fracture_trauma_d">Non-union, malunion and multiple fractures</div>
    </div>
</a>
<a href="revision-surgery.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-arrows-rotate text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_revision_surgery_t">Revision Surgery</div>
        <div class="text-xs text-slate-500" data-lang="sv_revision_surgery_d">Redo surgery for failed or loose implants</div>
    </div>
</a>
<a href="second-opinion.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-user-doctor text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_second_opinion_t">Second Opinion</div>
        <div class="text-xs text-slate-500" data-lang="sv_second_opinion_d">Expert review before you decide on surgery</div>
    </div>
</a>
<a href="deformity-correction.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-ruler-combined text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_deformity_correction_t">Deformity Correction Surgery</div>
        <div class="text-xs text-slate-500" data-lang="sv_deformity_correction_d">Bow legs, knock knees and limb alignment</div>
    </div>
</a>
<a href="diabetic-foot.html" class="text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-start space-x-3">
    <i class="fa-solid fa-bandage text-blue-600 mt-1 w-5 text-center"></i>
    <div>
        <div class="font-semibold text-slate-900 text-sm" data-lang="sv_diabetic_foot_t">Diabetic Foot (Diabetic Wound Care)</div>
        <div class="text-xs text-slate-500" data-lang="sv_diabetic_foot_d">Diabetic wound care and limb salvage</div>
    </div>
</a>

                    </div>
                </div>

                <a href="index.html#aboutSection" class="inline-block hover:text-blue-600 transition-colors py-2 text-slate-700 font-semibold" data-lang="navAbout">Doctor Credentials</a>
                <a href="index.html#clinicSection" class="inline-block hover:text-blue-600 transition-colors py-2 text-slate-700 font-semibold" data-lang="navClinic">Clinic & Schedule</a>
            </nav>

            <!-- Action Buttons: Language Toggle & Appointment Button -->
            <div class="hidden sm:flex items-center space-x-3">
                <!-- Language Switcher Button -->
                <button id="langToggleBtn" onclick="toggleLanguage()" class="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all shadow-sm">
                    <i class="fa-solid fa-language text-blue-600 text-base"></i>
                    <span id="langLabel">తెలుగులో చదవండి</span>
                </button>

                <!-- Book Appointment CTA -->
                <button onclick="openBookingModal('General Consultation')" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2">
                    <i class="fa-regular fa-calendar-check"></i>
                    <span data-lang="btnBookAppt">Book Appointment</span>
                </button>
            </div>

            <!-- Mobile menu toggle -->
            <div class="lg:hidden flex items-center space-x-2">
                <button id="langToggleBtnMobile" onclick="toggleLanguage()" class="px-2.5 py-1.5 rounded-lg bg-slate-100 text-xs font-bold border border-slate-300">
                    <span id="langLabelMobile">తెలుగు</span>
                </button>
                <button onclick="toggleMobileMenu()" class="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none">
                    <i class="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </a>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobileMenu" class="hidden lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
        <a href="index.html" class="block w-full text-left py-2 font-semibold text-slate-800 border-b border-slate-100" data-lang="navHome">Home</a>
        <div class="font-semibold text-blue-600 pt-2 text-xs uppercase tracking-wider" data-lang="navServices">Services Pages:</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
<a href="knee-replacement.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_knee_replacement_t">Knee Replacement Surgery</a>
<a href="hip-replacement.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_hip_replacement_t">Hip Replacement</a>
<a href="shoulder-surgery.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_shoulder_surgery_t">Shoulder Surgery</a>
<a href="arthroscopy.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_arthroscopy_t">Arthroscopy Surgery</a>
<a href="spine-surgery.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_spine_surgery_t">Spine Surgery</a>
<a href="pediatric-ortho.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_pediatric_ortho_t">Pediatric Orthopedic</a>
<a href="tb-spine-hip-joint.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_tb_spine_hip_joint_t">TB-Spine, TB-Hip, TB-Joint</a>
<a href="trauma-care.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_trauma_care_t">Trauma Care</a>
<a href="foot-ankle-surgery.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_foot_ankle_surgery_t">Foot &amp; Ankle Surgery</a>
<a href="hand-forearm-surgery.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_hand_forearm_surgery_t">Hand &amp; Forearm</a>
<a href="complex-fracture-trauma.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_complex_fracture_trauma_t">Complex Fracture &amp; Trauma</a>
<a href="revision-surgery.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_revision_surgery_t">Revision Surgery</a>
<a href="second-opinion.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_second_opinion_t">Second Opinion</a>
<a href="deformity-correction.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_deformity_correction_t">Deformity Correction Surgery</a>
<a href="diabetic-foot.html" class="text-left text-sm py-1.5 text-slate-700 font-medium hover:text-blue-600" data-lang="sv_diabetic_foot_t">Diabetic Foot (Diabetic Wound Care)</a>

        </div>
        <button onclick="openBookingModal('General Consultation'); toggleMobileMenu()" class="w-full mt-3 py-3 rounded-xl bg-blue-600 text-white font-bold text-center" data-lang="btnBookAppt">Book Appointment</button>
    </div>
</header>
`,

/* ---------------- BOOKING MODAL + TOAST ---------------- */
modal: `
<!-- APPOINTMENT MODAL OVERLAY -->
<div id="bookingModal" role="dialog" aria-modal="true" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in duration-200">
        <button onclick="closeBookingModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold text-sm">
            ✕
        </button>
        <div class="text-center mb-5">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl mx-auto flex items-center justify-center text-xl mb-2">
                <i class="fa-solid fa-calendar-check"></i>
            </div>
            <h3 class="text-xl font-extrabold text-navy-900" data-lang="modalTitle">Schedule Consultation</h3>
            <p class="text-xs text-slate-500" data-lang="modalSub">Dr. K. Sandeep Reddy - Orthopaedic Specialist</p>
        </div>

        <form onsubmit="handleModalFormSubmit(event)" class="space-y-3">
            <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1" data-lang="modalServiceLabel">Select Procedure / Concern</label>
                <select id="modalServiceSelect" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium">
<option value="General Consultation">General Orthopaedic Consultation</option>
<option value="Knee Replacement Surgery">Knee Replacement Surgery</option>
<option value="Hip Replacement">Hip Replacement</option>
<option value="Shoulder Surgery">Shoulder Surgery</option>
<option value="Arthroscopy Surgery">Arthroscopy Surgery</option>
<option value="Spine Surgery">Spine Surgery</option>
<option value="Pediatric Orthopedic">Pediatric Orthopedic</option>
<option value="TB-Spine, TB-Hip, TB-Joint">TB-Spine, TB-Hip, TB-Joint</option>
<option value="Trauma Care">Trauma Care</option>
<option value="Foot &amp; Ankle Surgery">Foot &amp; Ankle Surgery</option>
<option value="Hand &amp; Forearm">Hand &amp; Forearm</option>
<option value="Complex Fracture &amp; Trauma">Complex Fracture &amp; Trauma</option>
<option value="Revision Surgery">Revision Surgery</option>
<option value="Second Opinion">Second Opinion</option>
<option value="Deformity Correction Surgery">Deformity Correction Surgery</option>
<option value="Diabetic Foot (Diabetic Wound Care)">Diabetic Foot (Diabetic Wound Care)</option>
<option value="Thursday Free OP">Thursday Free OP (Vemulawada)</option>
</select>
            </div>
            <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1" data-lang="formName">Patient Name *</label>
                <input type="text" required placeholder="Enter full name" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
            <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1" data-lang="formPhone">Phone Number *</label>
                <input type="tel" required placeholder="10-digit number" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
            <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Preferred Location</label>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <label class="flex items-center space-x-2 border border-slate-300 p-2 rounded-lg cursor-pointer hover:bg-slate-50">
                        <input type="radio" name="loc" value="Vemulawada" checked class="text-blue-600">
                        <span>Vemulawada (Thursday)</span>
                    </label>
                    <label class="flex items-center space-x-2 border border-slate-300 p-2 rounded-lg cursor-pointer hover:bg-slate-50">
                        <input type="radio" name="loc" value="Hospital" class="text-blue-600">
                        <span>Hospital OP</span>
                    </label>
                </div>
            </div>
            <button type="submit" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all mt-2" data-lang="btnSubmitModal">
                Submit Booking Request
            </button>
        </form>
    </div>
</div>

<!-- SUCCESS TOAST NOTIFICATION -->
<div id="toastNotification" class="fixed bottom-5 right-5 z-50 hidden bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-3 text-xs sm:text-sm">
    <i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>
    <span id="toastText">Appointment booked successfully! We will call you shortly.</span>
</div>
`,

/* ---------------- FOOTER ---------------- */
footer: `
<!-- FOOTER -->
<footer id="siteFooter" class="bg-navy-900 text-slate-400 text-xs py-10 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-800 pb-6">
            <div>
                <div class="text-white font-extrabold text-base flex items-center gap-2">
                    <i class="fa-solid fa-bone text-amber-400"></i> Dr. K. Sandeep Reddy
                </div>
                <p class="text-slate-400 text-xs mt-1">FIJR Joint Replacement & Complex Trauma Specialist | Ex-BIRRD Tirupati</p>
            </div>
            <div class="flex flex-wrap gap-4 text-xs font-semibold">
<a href="knee-replacement.html" class="hover:text-amber-400" data-lang="sv_knee_replacement_t">Knee Replacement Surgery</a>
<a href="hip-replacement.html" class="hover:text-amber-400" data-lang="sv_hip_replacement_t">Hip Replacement</a>
<a href="shoulder-surgery.html" class="hover:text-amber-400" data-lang="sv_shoulder_surgery_t">Shoulder Surgery</a>
<a href="spine-surgery.html" class="hover:text-amber-400" data-lang="sv_spine_surgery_t">Spine Surgery</a>
<a href="second-opinion.html" class="hover:text-amber-400" data-lang="sv_second_opinion_t">Second Opinion</a>
<a href="diabetic-foot.html" class="hover:text-amber-400" data-lang="sv_diabetic_foot_t">Diabetic Foot (Diabetic Wound Care)</a>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center text-slate-500 gap-2">
            <p>&copy; <span id="year">2026</span> Dr. K. Sandeep Reddy. All rights reserved.</p>
            <p>Clinic Address: 2nd By-pass, Vemulawada (Near German Guest House)</p>
        </div>
    </div>
</footer>
`
};
