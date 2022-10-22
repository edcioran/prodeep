const templatesObject = {
    template_navbar: function (pars) {
        const url = window.location.href
        const page = url.split('/')[3]

        switch (page) {
            case 'Tentang.html':
                return `
                <nav class="fixed z-30 right-0 left-0 top-0">
                    <div class="duration-200 flex items-center justify-between z-30 px-[24px] py-[20px]">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="max-h-0 duration-200 overflow-hidden bg-white px-[24px] shadow-[#94a3b8_0_10px_15px_-15px]">
                        <ul class="space-y-5 pt-3 pb-6 text-slate-700">
                            <li><a href="" class="text-[24px] text-blue-700 underline">Tentang</a></li>
                            <li><a href="/Program.html" class="text-[24px]">Program</a></li>
                            <li><a href="/Anggota.html" class="text-[24px]">Anggota</a></li>
                            <li><a href="/Publikasi.html" class="text-[24px]">Publikasi</a></li>
                            <li><a href="/Kontak.html" class="text-[24px]">Hubungi kami</a></li>
                        </ul>
                    </div>
                </nav>
                `
            case 'Program.html':
                return `
                <nav class="fixed z-30 right-0 left-0 top-0">
                    <div class="duration-200 flex items-center justify-between z-30 px-[24px] py-[20px]">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="max-h-0 duration-200 overflow-hidden bg-white px-[24px] shadow-[#94a3b8_0_10px_15px_-15px]">
                        <ul class="space-y-5 pt-3 pb-6 text-slate-700">
                            <li><a href="/Tentang.html" class="text-[24px]">Tentang</a></li>
                            <li><a href="" class="text-[24px] text-blue-700 underline">Program</a></li>
                            <li><a href="/Anggota.html" class="text-[24px]">Anggota</a></li>
                            <li><a href="/Publikasi.html" class="text-[24px]">Publikasi</a></li>
                            <li><a href="/Kontak.html" class="text-[24px]">Hubungi kami</a></li>
                        </ul>
                    </div>
                </nav>
                `
            case 'Anggota.html':
                return `
                <nav class="fixed z-30 right-0 left-0 top-0">
                    <div class="duration-200 flex items-center justify-between z-30 px-[24px] py-[20px]">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="max-h-0 duration-200 overflow-hidden bg-white px-[24px] shadow-[#94a3b8_0_10px_15px_-15px]">
                        <ul class="space-y-5 pt-3 pb-6 text-slate-700">
                            <li><a href="/Tentang.html" class="text-[24px]">Tentang</a></li>
                            <li><a href="/Program.html" class="text-[24px]">Program</a></li>
                            <li><a href="" class="text-[24px] text-blue-700 underline">Anggota</a></li>
                            <li><a href="/Publikasi.html" class="text-[24px]">Publikasi</a></li>
                            <li><a href="/Kontak.html" class="text-[24px]">Hubungi kami</a></li>
                        </ul>
                    </div>
                </nav>
                `
            case 'Publikasi.html':
                return `
                <nav class="fixed z-30 right-0 left-0 top-0">
                    <div class="duration-200 flex items-center justify-between z-30 px-[24px] py-[20px]">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="max-h-0 duration-200 overflow-hidden bg-white px-[24px] shadow-[#94a3b8_0_10px_15px_-15px]">
                        <ul class="space-y-5 pt-3 pb-6 text-slate-700">
                            <li><a href="/Tentang.html" class="text-[24px]">Tentang</a></li>
                            <li><a href="/Program.html" class="text-[24px]">Program</a></li>
                            <li><a href="/Anggota.html" class="text-[24px]">Anggota</a></li>
                            <li><a href="" class="text-[24px] text-blue-700 underline">Publikasi</a></li>
                            <li><a href="/Kontak.html" class="text-[24px]">Hubungi kami</a></li>
                        </ul>
                    </div>
                </nav>
                `
            case 'Kontak.html':
                return `
                <nav class="fixed z-30 right-0 left-0 top-0">
                    <div class="duration-200 flex items-center justify-between z-30 px-[24px] py-[20px]">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="max-h-0 duration-200 overflow-hidden bg-white px-[24px] shadow-[#94a3b8_0_10px_15px_-15px]">
                        <ul class="space-y-5 pt-3 pb-6 text-slate-700">
                            <li><a href="/Tentang.html" class="text-[24px]">Tentang</a></li>
                            <li><a href="/Program.html" class="text-[24px]">Program</a></li>
                            <li><a href="/Anggota.html" class="text-[24px]">Anggota</a></li>
                            <li><a href="/Publikasi.html" class="text-[24px]">Publikasi</a></li>
                            <li><a href="" class="text-[24px] text-blue-700 underline">Hubungi kami</a></li>
                        </ul>
                    </div>
                </nav>
                `
            default:
                return `
                <nav class="fixed z-30 right-0 left-0 top-0">
                    <div class="duration-200 flex items-center justify-between z-30 px-[24px] py-[20px]">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="max-h-0 duration-200 overflow-hidden bg-white px-[24px] shadow-[#94a3b8_0_10px_15px_-15px]">
                        <ul class="space-y-5 pt-3 pb-6 text-slate-700">
                            <li><a href="/Tentang.html" class="text-[24px]">Tentang</a></li>
                            <li><a href="/Program.html" class="text-[24px]">Program</a></li>
                            <li><a href="/Anggota.html" class="text-[24px]">Anggota</a></li>
                            <li><a href="/Publikasi.html" class="text-[24px]">Publikasi</a></li>
                            <li><a href="/Kontak.html" class="text-[24px]">Hubungi kami</a></li>
                        </ul>
                    </div>
                </nav>
                `
        }

    },
    template_footer: function () {
        return `
        <footer class="bg-white px-[24px] flex flex-col gap-8 py-8 border-t">
            <div class="flex gap-3 items-center">
                <div class="w-[28px] h-[28px] bg-blue-700 rounded-full"></div>
                <span class="font-display text-[18px] text-slate-800 font-[500]">Prodeep Institute</span>
            </div>
            <div class="flex gap-8 text-[20px] text-slate-800">
                <ul class="space-y-2">
                    <li><a href="/Tentang.html" class="text-[20px]">Tentang</a></li>
                    <li><a href="/Program.html" class="text-[20px]">Program</a></li>
                    <li><a href="/Anggota.html" class="text-[20px]">Anggota</a></li>
                </ul>
                <ul class="space-y-2">
                    <li><a href="/Publikasi.html" class="text-[20px]">Publikasi</a></li>
                    <li><a href="/Kontak.html" class="text-[20px]">Hubungi kami</a></li>
                </ul>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-slate-600 text-[14px]">© Prodeep Institute 2022.</span>
                <ul class="flex items-center text-[24px] gap-4 text-slate-600 font-extralight">
                    <li><a href="https://www.instagram.com/prodeepins/"><i class="iconoir-instagram text-[24px] text-slate-500"></i></a></li>
                    <li><a href="https://www.facebook.com/prodeepins.prodeepins"><i class="iconoir-facebook-squared text-[24px] text-slate-500"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCB-b03bpxkrG2WK8e-6x81g"><i class="iconoir-youtube text-[24px] text-slate-500"></i></a></li>
                </ul>
            </div>
        </footer>
        `
    },
    template_download_form: function () {
        return `
        <div id="download-form" class="opacity-0 -z-10 bg-white fixed bottom-0 left-0 right-0 top-[35%] transition overflow-y-scroll px-[24px] py-9 flex flex-col gap-8 shadow-[#94a3b8_0_3px_10px]">
        <h2>Lengkapi form untuk unduh publikasi</h2>
            <div class="relative flex">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd80QqHH_sjoKtoZSq1d8MO_1Kuayx6NQCJmDDxJNxjIzOBdA/viewform?embedded=true&headers=false&widget=false&chrome=false" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
        <div id="overlay" class="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-10 z-30 hidden"></div>
        `
    }
}

const templates = Array.from(document.querySelectorAll('.template'))
templates.forEach(template => {
    const parameters = template.dataset.parameters.split(',')
    const f = templatesObject[template.dataset.name]
    const element = f(parameters)
    template.innerHTML = element
})