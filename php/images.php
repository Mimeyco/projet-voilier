<?php

$baseDir = "../img/articles/";
$articles = scandir($baseDir);

$images = [];

foreach ($articles as $article) {
    $articlePath = $baseDir . $article;

    // Vérifier que c'est un dossier
    if (is_dir($articlePath) && $article !== "." && $article !== "..") {
        // Scanner les fichiers du dossier
        $files = array_diff(scandir($articlePath), array('.', '..'));

        foreach ($files as $file) {
            // Ajouter chaque image au tableau
            $images[] = [
                "src" => "$articlePath/$file",
                "alt" => pathinfo($file, PATHINFO_FILENAME),
            ];
        }
    }
}

// Envoi en JSON
header("Content-Type: application/json");
echo json_encode($images);

?>
