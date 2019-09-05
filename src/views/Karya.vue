<template>
    <div id="wrapper">
        <div class="title">
            <h3>Karya</h3>
        </div>
        <div class="content">
            <div class='mb-8'>
                <p>Berikut adalah karya yang pernah saya buat</p>
            </div>
            <div class="block md:flex mb-8">
                <div class="w-full lg:w-1/2 flex align-items-center justify-center md:mr-2 mb-8">
                    <div class="card">
                        <div class="card-image">
                            <img src="@/assets/images/1.png" alt="Laravel-SMMV2">
                        </div>
                        <div class="card-body">
                            <div class="card-title">Laravel-SMM V1</div>
                            <div class='card-description my-4'>SMM Panel adalah website untuk membeli jasa Sosial Media Marketing seperti instagram followers, youtube subscribers, dll.</div>
                        </div>
                        <div class="card-footer">PHP Laravel 5.7, Bootstrap 4</div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 flex align-items-center justify-center md:ml-2 mb-8">
                    <div class="card">
                        <div class="card-image">
                            <img src="@/assets/images/2.png" alt="Laravel-SMMV2">
                        </div>
                        <div class="card-body">
                            <div class="card-title">Laravel-SMM V2</div>
                            <div class='card-description my-4'>SMM Panel adalah website untuk membeli jasa Sosial Media Marketing seperti instagram followers, youtube subscribers, dll.</div>
                        </div>
                        <div class="card-footer">PHP Laravel 5.8, Bootstrap 4</div>
                    </div>
                </div>
            </div>
            <div class="block md:flex mb-8">
                <div class="w-full lg:w-1/2 flex align-items-center justify-center md:mr-2 mb-8">
                    <div class="card">
                        <div class="card-image">
                            <img src="@/assets/images/3.png" alt="Laravel-SMMV2">
                        </div>
                        <div class="card-body">
                            <div class="card-title">Smart School System</div>
                            <div class='card-description my-4'>Smart School Berbasis Full Face Recognition (Absensi, Lacak Siswa, Ujian Online, Akses kelas, dll)</div>
                        </div>
                        <div class="card-footer">PHP Laravel 5.8, VueJS 2, TailwindCSS, MongoDB</div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 flex align-items-center justify-center md:ml-2 mb-8">
                    <div class="card">
                        <div class="card-image">
                            <img src="@/assets/images/4.png" alt="Laravel-SMMV2">
                        </div>
                        <div class="card-body">
                            <div class="card-title">Whatsapp Bot Sender</div>
                            <div class='card-description my-4'>Sebuah API untuk mengirim pesan whatsapp ke orang atau grup, sekaligus auto join grup whatsapp</div>
                        </div>
                        <div class="card-footer">Python Flask, Jinja2, Bootstrap 4, PostgreSQL</div>
                    </div>
                </div>
            </div>
            <div class="block md:flex mb-8">
                <div class="w-full lg:w-1/2 flex align-items-center justify-center mb-8 md:mr-2 ">
                    <div class="card">
                        <div class="card-image">
                            <img src="@/assets/images/5.png" alt="Laravel-SMMV2">
                        </div>
                        <div class="card-body">
                            <div class="card-title">Sistem Inventaris/Gudang</div>
                            <div class='card-description my-4'>Sebuah website untuk mengelola barang yang masuk dan keluar, peminjaman, distributor, dan lain-lain.</div>
                        </div>
                        <div class="card-footer">ExpressJS, CSS Native</div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 flex align-items-center justify-center md:ml-2 mb-8">
                    <div class="card">
                        <div class="card-image">
                            <img src="@/assets/images/6.png" alt="Laravel-SMMV2">
                        </div>
                        <div class="card-body">
                            <div class="card-title">Photography</div>
                            <div class='card-description my-4'>Website sosial media mirip Instagram untuk mengupload foto, komentar, rating, dan lain-lain. Ini adalah hasil dari LKS Jakarta Timur 2018</div>
                        </div>
                        <div class="card-footer">PHP Native, CSS Native</div>
                    </div>
                </div>
                
            </div>
            <div class="block md:flex mb-8">
                <div class="w-full lg:w-1/2 flex align-items-center justify-center md:ml-2 mb-8">
                    <div class="card">
                        <div class="card-image">
                            <img src="@/assets/images/7.png" alt="Laravel-SMMV2">
                        </div>
                        <div class="card-body">
                            <div class="card-title">Website Kelas</div>
                            <div class='card-description my-4'>Website untuk mengatur sistem kelas seperti jadwal pelajaran, jadwal piket, anggota kelas, dan lain-lain.</div>
                        </div>
                        <div class="card-footer">PHP Laravel 5.8</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
    #wrapper {
        text-align: left;
        /* padding: 5rem 2rem 0 5rem; */
    }

    .title {
        font-size: 40px;
        font-family: 'Raleway'
    }

    .content {
        font-family: 'Raleway'
    }

    .card-image img {
        width:100%;
        height: 120px;
        object-fit:fill
        
    }

    .card {
        /* margin: 15px; */
        border-radius: 10px;
        box-shadow: 3px 3px 10px 5px #ddd;
    }

    .card-body {
        padding: 15px;
        background-color: #fff;
        height:176px;
    }
    
    .card-title {
        font-size: 20px;
    }

    .card-description {
        font-size: 14px;
        
    }

    .card-footer {
        background-color: #f3f3f3;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 10px;
        font-size: 12px;
    }
</style>