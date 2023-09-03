<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="favicon.ico" rel="icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css" rel="stylesheet">
    <link href="css/app.css" rel="stylesheet">
</head>
<body>

    <!--page header-->

    <header class="page-header py-6" style="background: url(images/flatV1\ \ \(2.3\).jpg);" id="page-header">
        <div class="navigation-menu">  
            <input type="checkbox" id="toggler">
            <label for="toggler"><i class="fas fa-bars"></i></label>                    
            <nav class="navbar">
                <a href="torder.html">To order</a>
                <a href="shop.html">Shop</a>
                <a href="servis.html">Servis</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav> 
            <a href="index.html"><img src="images/DlogoV2.png" alt=""></a>          
            <div class="toolbar">
                <a href="wishlist.html"><i class="far fa-heart"></i><small class="text-gray">(<span id="total-number-items-in-wishlist">0</span>)</small></a>
                <a href="cart.html"><i class="fas fa-dolly-flatbed"></i><small class="text-gray">(<span id="total-number-items-in-cart">0</span>)</small></a>
                <a onclick="window.login.showModal()"><i class="far fa-user"></i></a>
            </div>
        </div>
    </header>

    <!--hero-->

    <section class="hero py-5" style="background: url(images/flatV1\ \ \(4\).jpg);">
        <div>
            <p>Our opinion on all parts of the house - colors, details, decor and lighting. Big or small. Get help from our creative decorators with everything that makes four walls a real home, full of life and dreams.</p>
            <h1>THE ROOM WHERE LIFE AND DREAMS HAPPEN</h1>
            <a href="shop.html" class="btm btm-primary">Browse furniture</a>
        </div>
    </section>

    <!--corousel-->

    <section class="py-5"></section>

    <!--catalog-->
    
    <section class="py-3 catalog">
        <header class="header mb-1">
            <h2>Our<span> products</span></h2>
        </header>
        <div class="product-container">

        <!--product-->

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#productView" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-new">New</div>
                    <img src="images/mnl.v7.jpg">                
                </div>
                <div class="container">   
                    <h3>Table</h3>
                    <div><span class="price">248</span> UAH</div>
                </div>
            </div>

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#!" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-sale">Sale</div>
                    <img src="images/mnl.v4.jpg">                
                </div>
                <div class="container">   
                    <h3>Stand</h3>
                    <div><span class="price">2480</span> UAH</div>
                </div>
                <div>                
                </div>
            </div>

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#!" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-sale">Sale</div>
                    <img src="images/mnl.v3.jpg">                
                </div>
                <div class="container">   
                    <h3>Bad</h3>
                    <div><span class="price">2480</span> UAH</div>  
                </div>
                <div>                
                </div>
            </div>

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#!" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-sale"></div>
                    <img src="images/mnl.v5.jpg">                
                </div>
                <div class="container">   
                    <h3>Stand</h3>
                    <div><span class="price">2480</span> UAH</div>   
                </div>
                <div>                
                </div>
            </div>

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#!" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-new">New</div>
                    <img src="images/mnl.v2.jpg">                
                </div>
                <div class="container">   
                    <h3>Table</h3>
                    <div><span class="price">2480</span> UAH</div>       
                </div>
            </div>

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#!" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-sale"></div>
                    <img src="images/mnl.v6.jpg">                
                </div>
                <div class="container">   
                    <h3>Table</h3>
                    <div><span class="price">2480</span> UAH</div>       
                </div>
                <div>                
                </div>
            </div>

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#!" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-new">New</div>
                    <img src="images/mnl.v8.jpg">                
                </div>
                <div class="container">   
                    <h3>Chair</h3>
                    <div><span class="price">2480</span> UAH</div>     
                </div>
            </div>

            <div class="product">
                <div class="icons">
                    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
                    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
                    <a href="#!" title="Show deteil"><i class="fas fa-eye"></i></a>
                </div>
                <div class="image">
                    <div class="badge bg-sale">Sale</div>
                    <img src="images/mnl.v9.jpg">                
                </div>
                <div class="container">   
                    <h3>Stand</h3>
                    <div><span class="price">2480</span> UAH</div>
                </div>
                <div>                
                </div>
            </div>

        </div>   
    </section>

    <!--services-->

    <section class="services py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h4>How do we start?</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div class="col-lg-3">
                    <h4>How do we do?</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div class="col-lg-3">
                    <h4>How do we deliver?</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div class="col-lg-3">
                    <h4>How do we serve?</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>

<!--social(instagram)-->

<!--hero bottom-->

    <section class="hero-bottom py-5" style="background: url(images/flatV1\ \ \(8\).jpg);">
        <div>
            <p>You'll be well looked after in our store by dedicated staff who are happy to offer interior design advice and tips. We've carefully selected our furniture and hand-picked the products in the store to help you find the best for your home.</p>
            <h1>SELECTED DECOR AND INSPIRATION IN OUR STORE</h1>
            <a href="#" class="btm btm-primary">Browse furniture</a>
        </div>
    </section>

    <!--footer-->
    <footer class="footer">
        <div class="footer-content py-5">
            <a href="index.html" class="brand"></i><h2>Aviden Wood&Steel</h2></a>
            <p>Perhaps you have questions on this subject, my dear friends.</p>
            <ul class="footer-services">
                <li><a href="help.html">Help</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <ul class="footer-social">
                <li><a href="footer-link" href=""><i class="fab fa-facebook"></i></a></li>
                <li><a href="footer-link" href=""><i class="fab fa-instagram"></i></a></li>
                <li><a href="footer-link" href=""><i class="fab fa-youtube"></i></a></li>
                <li><a href="footer-link" href=""><i class="fab fa-pinterest"></i></a></li>
                <li><a href="footer-link" href=""><i class="fab fa-viber"></i></a></li>
                <li><a href="footer-link" href=""><i class="fab fa-telegram"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom py-2">
            <p>copyright &copy;2023 codeOpacity. designed by <span>Ditiselit</span></p>
        </div>
    </footer>

    <div class="modal-window">
        <div class="modal" id="productView">
            <div class="modal-dialog">
                <div class="modal-content">
                    <a class="close btn-close" href="#!"><i class="fas fa-times"></i></a>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="bg-center bg-cover d-block h-100" style="background: url(images/mnl.v7.jpg);"></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="py-5">
                                    <h2>Product name</h2>
                                    <p>10980</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque autem ratione sunt doloribus commodi earum beatae omnis, deleniti saepe, ad laboriosam, deserunt quisquam modi. Molestiae dolorem nisi eveniet architecto.</label></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <dialog id="login">
        <form class="login-form">
            <h3>Sing in</h3>
            <input type="email" placeholder="Enter ypor Email" class="box form-control">
            <input type="password" placeholder="Enter ypor Password" class="box form-control">
            <div class="remember form-check">
                <input type="checkbox" class="form-check-input">
                <label>Remember me</label>
             </div>
             <input type="submit" value="Sing in">
             <a href="#" onclick="window.login.close();">Close</a>
        </form>
    </dialog>

    <script src="js/db.js"></script>
    <script src="js/app.js">
    </script>

</body>
</html>