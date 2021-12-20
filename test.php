<?php 

// PHP NATIVE PDO
try {
    $db=new PDO("mysql:host=localhost;dbname=$database","$username","$password", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // ============================
    $sql = "";
    $sql="SELECT * from tbl_user u left join tbl_jurusan j on j.id_jurusan=u.id_jurusan where u.id_user='E03140183'";
    //! table schema
    $sql="SELECT COLUMN_NAME as column FROM information_schema.columns where table_schema='db_kelas' AND table_name='tbl_kelas'";
    //! INSERT 
    $sql = "INSERT into tbl_test (id_pesan,id_penerima) values ('$idp','$id_penerima')";
    //! UPDATE 
    $sql = "UPDATE tbl_test set status_pengirim='$text' where no='$id_pesan'";
    //! DELETE 
    $sql ="DELETE from tbl_test where id_property='$id_property'";
    // ============================
    $hasil=$db->prepare($sql);
    $hasil->execute();//disini bisa dimaksukkan array sebagai referensi ke ? di sql query .. 
    $d = $hasil->fetchAll(PDO::FETCH_ASSOC); 

}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}



// LARAVEL PDO
$username= $request->input('username');
$pdo = DB::getPdo();
$sql2="show index from $table where Key_name = 'PRIMARY' ";
$hasil2=$pdo->prepare($sql2);
$hasil2->execute();
$hasil2=$hasil2->fetch(PDO::FETCH_ASSOC);



// LARAVEL MODEL
#SELECT
php artisan make:model Product
use \App\Product
Category::all(); // untuk mengambil semua data
Product::find(1); //untuk mengambil data berdasarkan id = 1 
Product::findOrFail(1); // mengambil data berdasarkan id = 1, jika kosong maka throw fail 404 
Product::where("status", "active");//untuk mengambil data dengan filter where status = "active"  dalam bentuk array 
Product::where("status", "active")->first();//untuk mengambil data pertama dari filter
Product::where("status", "active")->count();//untuk menghitung jumlah row 
Product::all()->max("price");//mendapatkan nilai tertinggi pada field price 
Product::all()->min("price");//mendapatkan nilai terednah pada field price 
Product::all()->sum("stock");//jumlah kan semua data yang ada pada stock
Product::all()->avg("price");//nilai rata" dari price 

#INSERT 
//cara 1
$product = new Product;//set $product sebagai object pada model Product 
$product->name="barang 1";//menambahkan seperti value pair
$product->save();//menyimpan pada model yang telah semua ditambahkan pada value pair
//cara 2 
$product_baru->save() 
$product_tas = Product::create([
    "name" => "Tas Selempang Army",
]);

#update 
//cara 1 
$produk_untuk_diupdate = Product::findOrFail(20);// select dari tabel products dengan ID 20
$produk_untuk_diupdate->name = "name barang kita ubah di sini";// ubah nilai description dari record yang kita dapatkan
$product_untuk_diupdate->save();// simpan perubahan ke database untuk product dengan ID 20 tadi
// cara 2 
AppProduct::where("status", "active")->update(["status" => "inactive"]);// mengupdate product where status=active , mengubah value status menjadi inactive 
AppProduct::find(2)->update(["status" => "inactive"]);// mengupdate product dimana id=2, mengubah value status menjadi inactive 

#delete 
//cara 1
$product = Product::findOrFail(2);//mencari data dengan id 2
$product->delete();//delete data yang sudah di filter
$product->forceDelete();//mendelete file walaupun diset menjadi soft delete dengan paksa 
//cara 2
AppProduct::destroy(22);// hapus product yang memiliki ID 22
AppProduct::destroy([23,25,21]);// hapus product dengan ID 23,25,31
AppProduct::destroy(23,25,21);// cara ini bekerja persis seperti cara sebelumnya
#soft delete //! digunakan untuk mendelete tapi file masih berada di record 
// carany pertama buat column dengan nama delete_at, lalu pada Model kita tambahkan use SoftDeletes;
class Product extends Model
{
 use SoftDeletes;
}
$product = AppProduct::findOrFail(23);
if($product->trashed()){//mencek apakah data berada di posisi softdelete
 $product->restore();//apabila data softdelete maka kembalikan 
}
// mecari file dengan atau tanpa kondisi softdelete 
$product = AppProduct::where("owner", 12)->withTrashed()->get();
$product_trashed = AppProduct::where("owner", 12)->onlyTrashed()->get()





?>