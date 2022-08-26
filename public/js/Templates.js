const templatesObject = {
    template_navbar: function (pars) {
        const url = window.location.href
        const page = url.split('/')[3]

        switch (page) {
            case 'Tentang.html':
                return `
                <nav class="px-[24px] py-[20px] fixed z-30 right-0 left-0 top-0">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="hidden">
                        <div class="template" dataset-name="test" dataset-parameters=""></div>
                        <ul class="space-y-5 pt-7 pb-4 text-slate-700">
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
                <nav class="px-[24px] py-[20px] fixed z-30 right-0 left-0 top-0">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="hidden">
                        <div class="template" dataset-name="test" dataset-parameters=""></div>
                        <ul class="space-y-5 pt-7 pb-4 text-slate-700">
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
                <nav class="px-[24px] py-[20px] fixed z-30 right-0 left-0 top-0">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="hidden">
                        <div class="template" dataset-name="test" dataset-parameters=""></div>
                        <ul class="space-y-5 pt-7 pb-4 text-slate-700">
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
                <nav class="px-[24px] py-[20px] fixed z-30 right-0 left-0 top-0">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="hidden">
                        <div class="template" dataset-name="test" dataset-parameters=""></div>
                        <ul class="space-y-5 pt-7 pb-4 text-slate-700">
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
                <nav class="px-[24px] py-[20px] fixed z-30 right-0 left-0 top-0">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="hidden">
                        <div class="template" dataset-name="test" dataset-parameters=""></div>
                        <ul class="space-y-5 pt-7 pb-4 text-slate-700">
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
                <nav class="px-[24px] py-[20px] fixed z-30 right-0 left-0 top-0">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex gap-3 items-center">
                            <div class="w-[30px] h-[30px] bg-blue-700 rounded-full"></div>
                            <span class="font-display text-[20px] text-slate-900 font-[500]">Prodeep Institute</span>
                        </a>
                        <i id="nav-toggle" class="cursor-pointer iconoir-menu text-[24px] text-slate-700"></i>
                    </div>
                    <div id="nav-menus" class="hidden">
                        <div class="template" dataset-name="test" dataset-parameters=""></div>
                        <ul class="space-y-5 pt-7 pb-4 text-slate-700">
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
        
        <div id="download-form" class="opacity-0 -z-10 bg-white fixed bottom-0 left-0 right-0 top-[30%] transition overflow-y-scroll px-[24px] py-9 flex flex-col gap-8 shadow-[#94a3b8_0_3px_10px]">
        <h2>Lengkapi form untuk unduh publikasi</h2>
        <form action="" class="flex flex-col gap-3" name="download-form">
            <input type="hidden" name="id" id="idinput">
            <div class="flex gap-2">
                <div class="flex flex-col gap-2">
                    <label for="namadepan">Nama depan</label>
                    <input type="text" name="namadepan" class="w-full" autocomplete="off">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="namabelakang">Nama belakang</label>
                    <input type="text" name="namabelakang" class="w-full" autocomplete="off">
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="wa">No. WhatsApp</label>
                <div class="flex items-stretch">
                    <div class="border-2 border-r-0 rounded-l flex items-center px-3 bg-gray-100">
                        <span class="text-gray-500">+62</span>
                    </div>
                    <input type="number" name="wa" class="block rounded-l-none w-full" placeholder="8765432121" autocomplete="off">
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="email">Email</label>
                <div class="relative">
                    <input type="email" name="email" class="w-full pl-9" autocomplete="off" placeholder="example@mail.com">
                    <i class="iconoir-mail text-[20px] text-gray-400 block absolute top-[27%] left-3"></i>
                </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Submit form</button>
            </form>
        </div>
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