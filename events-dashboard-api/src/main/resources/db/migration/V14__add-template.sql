INSERT INTO public.templates (id, template_name, template_content) VALUES (2, 'blog', '
    <!-- Navigation -->
    <nav id="siteNav" class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Logo and responsive toggle -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="logo no-transition">
                    <div class="logo-inner">
                        <a href="//www.cegeka.com" class="no-transition Header-branding-logo"><img class="cegeka-logo"
                                src="assets/images/cegeka-logo-color.png" alt="Cegeka"></a>
                        <a href="//www.cegeka.com" class="no-transition Header-branding-logo"><img class="cegeka-logo"
                                src="assets/images//cegeka-logo-white.png" alt="Cegeka"></a>
                    </div>
                </div>
            </div>
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container -->
    </nav>

    <!-- Header -->
    <header>
        <img class="img-responsive header-image" src="$header_image">
        <div class="header-content">
            <div class="header-content-inner">
                <h1>$title</h1>
                <p>$subtitle</p>
            </div>
        </div>
    </header>

    <!-- Date Section -->
    <section>
        <div class="post-info boxed">
            <div class="container">
                <div class="row">
                    <div class="column width-12">
                        <span class="post-date">$content_date</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Content 1 -->
    <section class="content">
        <div class="container">
            <div class="row">
                <div class="col-sm-7">
                    <img class="img-responsive  center-block" src="$content_image" alt="">
                    $content
                </div>
                <div class="col-sm-5">
               <hr>
                    <div class="flex-container">
                        <div class="user-avatar">
                            <img src="$user_avatar" alt="$user_avatar_alt" width="80px" height="80px" >
                        </div>

                        <div class="comment-content">
                            <p>Written by<br> <span class="weight-semi-bold">$written_by</span>
                            </p>
                        </div>
                    </div>

                    <hr>
                    <a href="#" class="btn btn-primary btn-lg">Subscribe</a>

                    <!-- Buttons start here. Copy this ul to your document. -->
                    <div>
                        <hr>
                        <h3 class="h4">Share this article</h3>
                        <div id="hs_cos_wrapper_module_1524646580980744" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                            style="" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                            <div class="social-sharing-buttons">
                                <ul class="rrssb-buttons rrssb-1 small-format">


                                    <li class="rrssb-linkedin small" data-initwidth="14.285714285714286" data-size="57"
                                        style="width: 14.2857%;">
                                        <!-- Replace href with your meta and URL information -->
                                        <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.cegeka.com/en/be/blog/blockchain-applications-and-2-factor-authentication"
                                            class="popup">
                                            <span class="rrssb-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                                                    <path d="M25.424 15.887v8.447h-4.896v-7.882c0-1.98-.71-3.33-2.48-3.33-1.354 0-2.158.91-2.514 1.802-.13.315-.162.753-.162 1.194v8.216h-4.9s.067-13.35 0-14.73h4.9v2.087c-.01.017-.023.033-.033.05h.032v-.05c.65-1.002 1.812-2.435 4.414-2.435 3.222 0 5.638 2.106 5.638 6.632zM5.348 2.5c-1.676 0-2.772 1.093-2.772 2.54 0 1.42 1.066 2.538 2.717 2.546h.032c1.71 0 2.77-1.132 2.77-2.546C8.056 3.593 7.02 2.5 5.344 2.5h.005zm-2.48 21.834h4.896V9.604H2.867v14.73z"></path>
                                                </svg>
                                            </span>
                                            <span class="rrssb-text">linkedin</span>
                                        </a>
                                    </li>

                                    <li class="rrssb-facebook small" data-initwidth="14.285714285714286" data-size="68"
                                        style="width: 14.2857%;">
                                        <!--  Replace with your URL. For best results, make sure you page has the proper FB Open Graph tags in header:
                                            https://developers.facebook.com/docs/opengraph/howtos/maximizing-distribution-media-content/ -->
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.cegeka.com/en/be/blog/blockchain-applications-and-2-factor-authentication"
                                            class="popup">
                                            <span class="rrssb-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
                                                    <path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"></path>
                                                </svg>
                                            </span>
                                            <span class="rrssb-text">facebook</span>
                                        </a>
                                    </li>

                                    <li class="rrssb-twitter small" data-initwidth="14.285714285714286" data-size="53"
                                        style="width: 14.2857%;">
                                        <!-- Replace href with your Meta and URL information  -->
                                        <a href="https://twitter.com/intent/tweet?text=Blockchain+applications+and+2+factor+authentication%20https://www.cegeka.com/en/be/blog/blockchain-applications-and-2-factor-authentication"
                                            class="popup">
                                            <span class="rrssb-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                                                    <path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z"></path>
                                                </svg>
                                            </span>
                                            <span class="rrssb-text">twitter</span>
                                        </a>
                                    </li>

                                    <li class="rrssb-xing small" data-initwidth="14.285714285714286" data-size="29"
                                        style="width: 14.2857%;">
                                        <!-- Replace href with your meta and URL information -->
                                        <a href="https://www.xing.com/spi/shares/new?url=https://www.cegeka.com/en/be/blog/blockchain-applications-and-2-factor-authentication"
                                            class="popup">
                                            <span class="rrssb-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                                                    <path d="M18.89,30.708L12.023,18.67L22.681,0h7.173L19.197,18.669l6.867,12.038L18.89,30.708L18.89,30.708z M7.617,21.422l5.328-8.771L8.949,5.612H2.186l3.995,7.039l-5.327,8.771H7.617z"></path>
                                                </svg>
                                            </span>
                                            <span class="rrssb-text">xing</span>
                                        </a>
                                    </li>

                                    <li class="rrssb-googleplus small" data-initwidth="14.285714285714286" data-size="60"
                                        style="width: 14.2857%;">
                                        <!-- Replace href with your meta and URL information.  -->
                                        <a href="https://plus.google.com/share?url=https://www.cegeka.com/en/be/blog/blockchain-applications-and-2-factor-authentication"
                                            class="popup">
                                            <span class="rrssb-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M21 8.29h-1.95v2.6h-2.6v1.82h2.6v2.6H21v-2.6h2.6v-1.885H21V8.29zM7.614 10.306v2.925h3.9c-.26 1.69-1.755 2.925-3.9 2.925-2.34 0-4.29-2.016-4.29-4.354s1.885-4.353 4.29-4.353c1.104 0 2.014.326 2.794 1.105l2.08-2.08c-1.3-1.17-2.924-1.883-4.874-1.883C3.65 4.586.4 7.835.4 11.8s3.25 7.212 7.214 7.212c4.224 0 6.953-2.988 6.953-7.082 0-.52-.065-1.104-.13-1.624H7.614z"></path>
                                                </svg> </span>
                                            <span class="rrssb-text">google+</span>
                                        </a>
                                    </li>

                                    <li class="rrssb-email small" data-initwidth="14.285714285714286" data-size="37"
                                        style="width: 14.2857%;">
                                        <!-- Replace subject with your message using URL Endocding: http://meyerweb.com/eric/tools/dencoder/ -->
                                        <a href="mailto:?Subject=https://www.cegeka.com/en/be/blog/blockchain-applications-and-2-factor-authentication">
                                            <span class="rrssb-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M21.386 2.614H2.614A2.345 2.345 0 0 0 .279 4.961l-.01 14.078a2.353 2.353 0 0 0 2.346 2.347h18.771a2.354 2.354 0 0 0 2.347-2.347V4.961a2.356 2.356 0 0 0-2.347-2.347zm0 4.694L12 13.174 2.614 7.308V4.961L12 10.827l9.386-5.866v2.347z"></path>
                                                </svg>
                                            </span>
                                            <span class="rrssb-text">email</span>
                                        </a>
                                    </li>

                                    <li class="rrssb-whatsapp small" data-initwidth="14.285714285714286" data-size="68"
                                        style="width: 14.2857%;">
                                        <a href="whatsapp://send?text=Blockchain+applications+and+2+factor+authentication%20https://www.cegeka.com/en/be/blog/blockchain-applications-and-2-factor-authentication"
                                            data-action="share/whatsapp/share">
                                            <span class="rrssb-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
                                                    <path d="M90 43.84c0 24.214-19.78 43.842-44.182 43.842a44.256 44.256 0 0 1-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 0 1-6.34-22.637C1.635 19.63 21.415 0 45.818 0 70.223 0 90 19.628 90 43.84zM45.818 6.983c-20.484 0-37.146 16.535-37.146 36.86 0 8.064 2.63 15.533 7.076 21.61l-4.64 13.688 14.274-4.537A37.122 37.122 0 0 0 45.82 80.7c20.48 0 37.145-16.533 37.145-36.857S66.3 6.983 45.818 6.983zm22.31 46.956c-.272-.447-.993-.717-2.075-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.36-1.717-.54-2.438.536-.72 1.076-2.797 3.495-3.43 4.212-.632.72-1.263.81-2.347.27-1.082-.536-4.57-1.672-8.708-5.332-3.22-2.848-5.393-6.364-6.025-7.44-.63-1.076-.066-1.657.475-2.192.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.718.182-1.345-.09-1.884-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.793-2.436-1.793-.63 0-1.353-.09-2.075-.09-.722 0-1.896.27-2.89 1.344-.99 1.077-3.788 3.677-3.788 8.964 0 5.288 3.88 10.397 4.422 11.113.54.716 7.49 11.92 18.5 16.223 11.01 4.3 11.01 2.866 12.996 2.686 1.984-.18 6.406-2.6 7.312-5.107.9-2.513.9-4.664.63-5.112z"></path>
                                                </svg>
                                            </span>
                                            <span class="rrssb-text">Whatsapp</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <!-- Buttons end here -->

                </div>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer class="page-footer">

        <!-- Contact Us -->
        <div class="contact">
            <div class="container">
                <p class="copyright pull-left clear-float-on-mobile">
                    © Cegeka | <a target="_blank" href="https://www.cegeka.com/en/terms-and-conditions">Terms &amp;
                        Conditions</a> | <a target="_blank" href="https://www.cegeka.com/en/privacy-policy">Privacy
                        policy</a> | <a target="_blank" href="https://www.cegeka.com/en/cookie-statement">Cookie
                        statement</a>
                </p>
            </div>
        </div>

    </footer>');


INSERT INTO public.variables (id, name, type, template_id, label) VALUES (5, 'title', 'input', 2, 'Post Title');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (6, 'subtitle', 'input', 2, 'Post Subtitle');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (7, 'header_image', 'upload', 2, 'Upload Header Image');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (8, 'content_date', 'date', 2, 'Content Date');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (9, 'content_image', 'upload', 2, 'Upload Content Image');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (10, 'content', 'textarea', 2, 'Content');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (11, 'user_avatar', 'upload', 2, 'Upload User Post Avatar');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (12, 'user_avatar_alt', 'input', 2, 'User Avatar Alt');
INSERT INTO public.variables (id, name, type, template_id, label) VALUES (13, 'written_by', 'input', 2, 'Blog written by');