<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{asset('css/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
        <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
  
        <link href="{{ asset('css/css/sb-admin-2.min.css')}}" rel="stylesheet">

        <title>GreenBus.pk</title>

        <!-- Fonts -->
       
    </head>
    <body>
    <div id="App"></div>
    <script src="{{ mix('js/app.js')}}"></script> 
    <script src="{{ asset('css/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{ asset('css/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{ asset('css/vendor/jquery-easing/jquery.easing.min.js')}}"></script> 
    <script src="{{ asset('css/js/sb-admin-2.min.js')}} "></script>  
 
</html>
