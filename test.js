#install laravel di composer 
composer global require “laravel/installer”

#
laravel new todo // laravel new todo --jet

composer require laravel/jetstream

// ini ganti
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo
DB_USERNAME=root
DB_PASSWORD=
// ini ganti
// jadi
DB_CONNECTION=sqlite
//jadi

buat file 
database/database.sqlite 

php artisan jetstream:install livewire

