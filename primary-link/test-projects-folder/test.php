<?PHP
$sender = 'beckjacob2277@gmail.com';
$recipient = '245@taxidrivermasp.taxi';

$subject = "php mail test";
$message = "php test message";
$headers = 'From:' . $sender;

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
