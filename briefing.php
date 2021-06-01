<?php

namespace Evernote;

require 'vendor/autoload.php';

//DEV TOKEN
// $token  = "S=s1:U=9663e:E=18111df1719:C=179ba2dead0:P=1cd:A=en-devtoken:V=2:H=a7e604c4428fe763daf5d75d4c7e5d47";

//PRODUCTION TOKEN

$token = "S=s562:U=d69efa8:E=1811ff3add7:C=179c8428040:P=185:A=codelari:V=2:H=ce8c67aa809b62406a1724f5f3187fe7";
$sandbox = false;

$briefingsNotebook = 'briefings';

$name = $_POST['name'];
$body = $_POST['body'];

$title = "BRIEFING - $name";


$client = new \Evernote\Client($token, $sandbox);

function getNotebook($notebookName)
{
    $notebooks = $GLOBALS['client']->listNoteBooks();
    foreach ($notebooks as $notebook) {
        if ($notebook->name === $notebookName) {
            return $notebook;
            break;
        }
    }
}

function createNote($title, $body, $notebookName)
{

    $notebook = getNotebook($notebookName);

    $note = new \Evernote\Model\Note();
    $note->title  = $title;
    $note->content = new \Evernote\Model\EnmlNoteContent($body);

    $GLOBALS['client']->uploadNote($note, $notebook);
}

try {
    createNote($title, $body, $briefingsNotebook);
    echo json_encode(['isSuccess' => true, "message" => "Sucesso"]);
    exit();
} catch (\Exception $error) {
    echo json_encode(['isSuccess' => false, "message" => $error]);
    exit();
}
