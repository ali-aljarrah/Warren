
<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';
require_once("./constatnt.php");



session_start();
// die(print_r($_POST));
// Check for the secret and for the referer and the request method
if(
    isset($_SESSION['random_secret']) && !empty($_SESSION['random_secret']) 
    && $_SESSION['random_secret'] == $_POST['scon'] && 
    isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])
    && $_SERVER['REQUEST_METHOD'] === 'POST'
    ) {

        // Check if the request is comming from the same domain
        if (strtolower(parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST)) == strtolower($_SERVER['HTTP_HOST'])) {
            // Validate recaptcha
            if(isset($_POST['g-recaptcha-response'])) {
                $url = 'https://www.google.com/recaptcha/api/siteverify?secret='.$secret_site_key.'&response='.$_POST['g-recaptcha-response'];
                $curl = curl_init();
                curl_setopt($curl, CURLOPT_URL, $url);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($curl, CURLOPT_HEADER, false);
                $data = curl_exec($curl);
                curl_close($curl);
                $response = json_decode($data);
              
                if($response->success) {
                    if(isset($_POST['firstName']) && !empty($_POST['firstName']) &&
                    isset($_POST['lastName']) && !empty($_POST['lastName']) &&
                    isset($_POST['email']) && !empty($_POST['email']) &&
                    isset($_POST['Phone']) && !empty($_POST['Phone']) &&
                    isset($_POST['messageContent']) && !empty($_POST['messageContent'])
                    ) {
                        $firstName = cleanupentries($_POST['firstName']);
                        $lastName = cleanupentries($_POST['lastName']);
                        $email = cleanupentries($_POST['email']);
                        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
                        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                            header('Location: /contact?error=email');
                            exit;
                        }
                        $Phone = cleanupentries($_POST['Phone']);
                        $message = cleanupentries($_POST['messageContent']);

                        $mail = new PHPMailer(true);
                      
                        try {
                            $mail->isSMTP();
                            $mail->Host = $smtp_host;
                            $mail->SMTPAuth = true;
                            $mail->Username = $smtp_username;
                            $mail->Password = $smtp_psaaword;
                            // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;           
                            $mail->Port = $smtp_port;
                        
                            //Recipients
                            $mail->setFrom($email);
                            $mail->addAddress($email_to);
                    
                        
                            //Content
                            $mail->isHTML(true);
                           
                            $mail->Body =  '<h3>This email is from IT R US contact us page</h3>
                            <h4>firstName: '.$firstName.'</h4>
                            <h4>lastName: '.$lastName.'</h4>
                            <h4>Email: '.$email.'</h4>
                            <h4>Phone: '.$phone.'</h4>
                            <h4>Message:</h4>
                            <p>'.$message.'</p>
                            ';
                        
                            $mail->send();
                            
                            header('Location: /contact?success=true');
                            exit;
                        } catch (Exception $e) {
                            header('Location: /contact?error=smtp');
                            exit;
                        }
                        exit;
                    } else {
                        header('Location: /contact?error=empty');
                        exit;
                    }
                } else {
                    header('Location: /contact?error=captcha');
                    exit;
                }
            } else {
                header('Location: /contact?error=default');
                exit;
            }
        } else {
            header('Location: /contact?error=default');
            exit;
        }
} else {
    header('Location: /contact?error=default');
    exit;
}

function cleanupentries($entry) {
    $entry = trim($entry);
    $entry = stripslashes($entry);
    $entry = htmlspecialchars($entry);
    return $entry;
}

?>