
<?php
$baseDir = "../img/articles/";
$articles = scandir($baseDir);

// Définition de l'ordre des mois
$moisOrdre = [
    "janvier" => 1, "février" => 2, "mars" => 3, "avril" => 4,
    "mai" => 5, "juin" => 6, "juillet août septembre" => 7, "octobre" => 8,
    "novembre" => 9, "décembre" => 10, "janvier25" => 11, "fevrier25" => 12,"mars25" => 13,"avril25"=>14
];

$images = [];
$dossiersTrie = [];

// Filtrer et trier les dossiers
foreach ($articles as $article) {
    if (is_dir($baseDir . $article) && $article !== "." && $article !== "..") {
        $dossiersTrie[$article] = $moisOrdre[strtolower($article)] ?? 99; // Si inconnu, mettre en fin de liste
    }
}

// Trier les dossiers par ordre croissant
asort($dossiersTrie);

foreach (array_keys($dossiersTrie) as $article) {
    $articlePath = $baseDir . $article;
    $files = array_diff(scandir($articlePath), array('.', '..'));

    foreach ($files as $file) {
        $images[] = [
            "src" => "$articlePath/$file",
            "alt" => pathinfo($file, PATHINFO_FILENAME),
        ];
    }
}

// Envoi en JSON propre
header("Content-Type: application/json");
ob_clean();
echo json_encode($images);
exit;
?>

