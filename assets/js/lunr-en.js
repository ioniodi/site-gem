var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  

  
    
    
      idx.add({
        title: "Artificial Inteligence",
        excerpt: "bibliography: ““ΤΕΧΝΗΤΗ ΝΟΗΜΟΣΥΝΗ: ΜΙΑ ΣΥΓΧΡΟΝΗ ΠΡΟΣΕΓΓΙΣΗ”, Russell S., Norvig P. ΕΚΔΟΣΕΙΣ ΚΛΕΙΔΑΡΙΘΜΟΣ ΕΠΕ, ISBN 960-209-873-2, 2005” ““Τεχνητή Nοημοσύνη”, 3η έκδοση,...",
        categories: [],
        tags: [],
        id: 0
      });
      
    
      idx.add({
        title: "Algorithms",
        excerpt: "bibliography: ““Introduction to Algorithms vol I”, CORMEN T.H., LEISERSON C.E., RIVEST R.L., STEIN C., ITE Publications, ISBN 978-960-524-225-1, 2009 (in...",
        categories: [],
        tags: [],
        id: 1
      });
      
    
      idx.add({
        title: "Business Administration",
        excerpt: "bibliography:\n\n  ““ORGANIZATION THORY AND DESIGN”, RICHARD L. DAFT, Klidarithos Publications, ISBN 960-209-846-5, 2005 (in Greek)”\n\n\n",
        categories: [],
        tags: [],
        id: 2
      });
      
    
      idx.add({
        title: "Big Data Management Technologies ",
        excerpt: "Bibliography: “Εξόρυξη από Μεγάλα Σύνολα Δεδομένων, Anand Rajaraman, Jeffrey David Ullman”eudoxus link ” Η ΜΕΘΟΔΟΣ PAGERANK ΤΗΣ GOOGLE ΚΑΙ ΑΛΛΑ...",
        categories: [],
        tags: [],
        id: 3
      });
      
    
      idx.add({
        title: "Calculus",
        excerpt: "bibliography : “Calculus, Volume I, Finney, Weir, Giordano, Crete University Press 2006.” “Vector Calculus, J. Marden and A. Tromba, University...",
        categories: [],
        tags: [],
        id: 4
      });
      
    
      idx.add({
        title: "Compilers",
        excerpt: "Bibliography: ” Compilers, Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman” eudoxus link ” Compilers, Παπασπύρου Νικόλαος...",
        categories: [],
        tags: [],
        id: 5
      });
      
    
      idx.add({
        title: "Introduction to the Theory of Computation",
        excerpt: "bibliography: ““Introduction to the Theory of Computation”, SIPSER MICHAEL, ITE Publications, ISBN 978-960-524-243-5, 2009 (in greek)” ““Elements of the Theory...",
        categories: [],
        tags: [],
        id: 6
      });
      
    
      idx.add({
        title: "Computer Architecture",
        excerpt: "bibliography: “D.A.Patterson &amp; J.L.Hennessy, Computer Organization and Design, Fourth Edition, Morgan Kaufmann, 2011.” “W. Stallings, Computer Organization and Architecture (9th...",
        categories: [],
        tags: [],
        id: 7
      });
      
    
      idx.add({
        title: "Computer Graphics",
        excerpt: "Bibliography: “Γραφικά και Οπτικοποίηση”, Θεοχάρης Θ., Πλατής Ν., Παπαϊωάννου Γ., Πατρικαλάκης Ν., Εκδόσεις Συμμετρία, ISBN 978-960-266-296-0, 2010”eudoxus link “Γραφικά με...",
        categories: [],
        tags: [],
        id: 8
      });
      
    
      idx.add({
        title: "Computer Programming",
        excerpt: "Bibliography: “C++ Προγραμματισμός”, 6η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Α. Γκιούρδα &amp; ΣΙΑ ΟΕ, ISBN 978-960-512-5912, 2011 (in greek)...",
        categories: [],
        tags: [],
        id: 9
      });
      
    
      idx.add({
        title: "Teaching Informatics",
        excerpt: "Bibliography: “Εισαγωγή στη διδακτική της πληροφορικής, Βασίλης Ι. Κόμης, Εκδόσεις Κλειδάριθμος” “Εισαγωγή στη διδακτική της πληροφορικής, Ν. Αλεξανδρής, Β. Μπελεσιώτης,...",
        categories: [],
        tags: [],
        id: 10
      });
      
    
      idx.add({
        title: "Cryptography",
        excerpt: "Bibliography: “Κρυπτογραφία και ασφάλεια δικτύων – αρχες και εφαρμογες. William Stallings, ΙΩΝ 2012.”eudoxus link “Σύγχρονη Κρυπτογραφία – Θεωρία και Εφαρμογές....",
        categories: [],
        tags: [],
        id: 11
      });
      
    
      idx.add({
        title: "Mobile and Social Media",
        excerpt: "bibliography: ““Επικοινωνία ανθρώπου – υπολογιστή, 3ή Έκδοση”, Dix Alan J., Finlay Janet E., Abowd Gregory D., Beale Russell, Εκδόσεις Α....",
        categories: [],
        tags: [],
        id: 12
      });
      
    
      idx.add({
        title: "Data Mining and Data Warehousing",
        excerpt: "Bibliography: “Εισαγωγή στην εξόρυξη δεδομένων, Tan Pang - Ning,Steinbach Michael,Kumar Vipin” eudoxus link “Εισαγωγή στην Εξόρυξη Δεδομένων και τις Αποθήκες...",
        categories: [],
        tags: [],
        id: 13
      });
      
    
      idx.add({
        title: "Data Structures",
        excerpt: "bibliography: “Δομές δεδομένων, αλγόριθμοι και εφαρμογές C++”, Sahnii Sartaj, Εκδόσεις ΤΖΙΟΛΑ, ISBN 978-960-418-030-1, 2004” “ΔΟΜΕΣ ΔΕΔΟΜΕΝΩΝ”, ΓΕΩΡΓΑΚΟΠΟΥΛΟΣ Γ.Φ., Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ...",
        categories: [],
        tags: [],
        id: 14
      });
      
    
      idx.add({
        title: "Databases I",
        excerpt: "bibliography: “Συστήματα Βάσεων Δεδομένων”, Silberschatz, Korth, Suda, Εκδόσεις Α. Γκιούρδα, ISBN 978-960-512-384-0, 2004” ““ΣΧΕΔΙΑΣΜΟΣ ΒΑΣΕΩΝ ΔΕΔΟΜΕΝΩΝ”, ΓΕΩΡΓΙΟΣ ΒΑΣΙΛΑΚΟΠΟΥΛΟΣ, Εκδόσεις Γ....",
        categories: [],
        tags: [],
        id: 15
      });
      
    
      idx.add({
        title: "Databases II",
        excerpt: "bibliography: ““Θεμελιώδεις αρχές συστημάτων βάσεων δεδομένων”, Elmasri Ramez,Navathe Shamkant B, Εκδόσεις Δίαυλος, ISBN 978-960-531-220-6, 2008” ““Συστήματα Βάσεων Δεδομένων”, Ιωάννης Μανωλόπουλος...",
        categories: [],
        tags: [],
        id: 16
      });
      
    
      idx.add({
        title: "Digital Image Processing",
        excerpt: "Bibliography: “ΨΗΦΙΑΚΗ ΕΠΕΞΕΡΓΑΣΙΑ ΕΙΚΟΝΑΣ”, ΙΩΑΝΝΗΣ ΠΗΤΑΣ, Εκδόσεις ΙΩΑΝΝΗΣ ΠΗΤΑΣ, 2010” “Ψηφιακή Επεξεργασία και Ανάλυση Εικόνας”, Παπαμάρκος Νικόλαος, Αυτοέκδοση, ISBN 978-960-92731-3-8,...",
        categories: [],
        tags: [],
        id: 17
      });
      
    
      idx.add({
        title: "Discrete Mathematics",
        excerpt: "Bibliography: “Discrete Mathematics: Mathematics of Computer Science, L. Kyrousis, Ch. Bouras and P. Spyrakis, Gutenberg, 1992” “Discrete Mathematics: Problems and...",
        categories: [],
        tags: [],
        id: 18
      });
      
    
      idx.add({
        title: "Distributed Network Systems",
        excerpt: "Βιβλιογραφία: ““ΚΑΤΑΝΕΜΗΜΕΝΑ ΣΥΣΤΗΜΑΤΑ: ΑΡΧΕΣ ΚΑΙ ΥΠΟΔΕΙΓΜΑΤΑ”, ANDREW S. TANENBAUM, MAARTEN VAN STEEN” eudoxus link ““ΚΑΤΑΝΕΜΗΜΕΝΑ ΣΥΣΤΗΜΑΤΑ ΜΕ JAVA”, Ι. Κ....",
        categories: [],
        tags: [],
        id: 19
      });
      
    
      idx.add({
        title: "Decision Support Systems",
        excerpt: "Bibliography: “Συστήματα υποστήριξης αποφάσεων”, Ματσατσίνης Ν., Εκδόσεις Νέων Τεχνολογιών, 2010, ISBN 978-960-6759-44-4 eudoxus link “Διοικητική επιστήμη”, Πραστάκος Γρηγόρης Π., Εκδόσεις...",
        categories: [],
        tags: [],
        id: 20
      });
      
    
      idx.add({
        title: "Introduction to E-Government",
        excerpt: "Bibliography: “”Εισαγωγή στην ηλεκτρονική διακυβέρνηση” , Πομπόρτσης Ανδρέας, Εκδόσεις ΤΖΙΟΛΑ, ISBN 960-418-083-5, 2006” eudoxus link “”Ηλεκτρονική δημόσια διοίκηση” , Αποστολάκης...",
        categories: [],
        tags: [],
        id: 21
      });
      
    
      idx.add({
        title: "Entertainment Technology Software and Virtual Worlds",
        excerpt: "Bibliography:\n\n  “ΒΙΝΤΕΟΠΑΙΧΝΙΔΙΑ: ΒΙΟΜΗΧΑΝΙΑ ΚΑΙ ΑΝΑΠΤΥΞΗ, ΚΩΣΤΑΣ ΑΝΑΓΝΩΣΤΟΥ”eudoxus link\n  “Εικονικά περιβάλλοντα πληροφόρησης, Κόκοτος Δημήτριος Χ.”eudoxus link\n\n",
        categories: [],
        tags: [],
        id: 22
      });
      
    
      idx.add({
        title: "Innovation and Entrepreneurship",
        excerpt: "Bibliography: “Η. Γ. Καραγιάννης, Ι. Λ. Μπακούρος, “Καινοτομία &amp; Επιχειρηματικότητα: Θεωρία – Πράξη”, Εκδόσεις Σοφία, 2010.” “Πιπερόπουλος Πάνος Γ., “”Επιχειρηματικότητα,...",
        categories: [],
        tags: [],
        id: 23
      });
      
    
      idx.add({
        title: "Human-Computer Interaction",
        excerpt: "bibliography: “Επικοινωνία ανθρώπου – υπολογιστή, 3ή Έκδοση, Dix Alan J., Finlay Janet E., Abowd Gregory D., Beale Russell, Εκδόσεις Α....",
        categories: [],
        tags: [],
        id: 24
      });
      
    
      idx.add({
        title: "Computers and the Humanities",
        excerpt: "Bibliography: “ΤΕΧΝΟΛΟΓΙΕΣ ΠΛΗΡΟΦΟΡΙΩΝ ΚΑΙ ΕΠΙΚΟΙΝΩΝΙΑΣ &amp; ΚΟΙΝΩΝΙΑ, Ιωάννης Σ. Κουμπούρος”eudoxus link “Υπηρεσίες προστιθέμενης αξίας στο διαδίκτυο, Μήλιου Αμαλία Ν.,Πομπόρτσης Ανδρέας...",
        categories: [],
        tags: [],
        id: 25
      });
      
    
      idx.add({
        title: "Introduction to Computer Science",
        excerpt: "bibliography: “Εισαγωγή στη σύγχρονη επιστήμη των υπολογιστών, Lister Andrew M., Εκδόσεις Δίαυλος, ISBN 978-960-7140-65-4, 2000” “Εισαγωγή στην επιστήμη των Υπολογιστών,...",
        categories: [],
        tags: [],
        id: 26
      });
      
    
      idx.add({
        title: "Information Privacy and Security Policies and Enhancing Technologies",
        excerpt: "bibliography: “Andreas Pfitzmann, Marit Hansen (2010) A Terminology for talking about Privacy by data minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity,...",
        categories: [],
        tags: [],
        id: 27
      });
      
    
      idx.add({
        title: "Analysis and Design of Information Systems",
        excerpt: "bibliography: “Alan Dennis. Barbara Haley Wixom, David Tegarden (2010) Ανάλυση &amp; Σχεδιασμός Συστημάτων με τη UML 2.0: Μια αντικειμενοστρεφής Προσέγγιση,...",
        categories: [],
        tags: [],
        id: 28
      });
      
    
      idx.add({
        title: "Ιnformation and Κnowledge Representation",
        excerpt: "Bibliography: “Εξόρυξη γνώσης από βάσεις δεδομένων και τον παγκόσμιο ιστό, Βαζιργιάννης Μιχάλης, Χαλκίδη Μαρία”eudoxus link “Εισαγωγή στην εξόρυξη δεδομένων, Tan...",
        categories: [],
        tags: [],
        id: 29
      });
      
    
      idx.add({
        title: "Information Retrieval",
        excerpt: "Βιβλιογραφία: “ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΑΝΑΚΤΗΣΗ ΠΛΗΡΟΦΟΡΙΩΝ”, CHRISTOPHER D. MANNING, PRABHAKAR RAGHAVAN, HINRICH eudoxus link “Ανάκτηση Πληροφορίας”, 2η Έκδοση, Baeza-Yates Ricardo, Ribeiro-Neto...",
        categories: [],
        tags: [],
        id: 30
      });
      
    
      idx.add({
        title: "Information Systems and Supply Management",
        excerpt: "Βιβλιογραφία: -“Πληροφοριακά Συστήματα Διαχείρισης Επιχειρησιακών Πόρων:Στρατηγικές &amp; Εφαρμογές, Γιάννης Πολλάλης, Αθανάσιος Βοζίκης”eudoxus link -“ΣΥΓΧΡΟΝΑ ΕΠΙΧΕΙΡΗΣΙΑΚΑ ΣΥΣΤΗΜΑΤΑ, ΚΩΝΣΤΑΝΤΙΝΟΣ Ι. ΣΤΕΦΑΝΟΥ, ΧΡΗΣΤΟΣ...",
        categories: [],
        tags: [],
        id: 31
      });
      
    
      idx.add({
        title: "Information Systems Security Management",
        excerpt: "Bibliography:\n\n  “Διαχείριση Ασφάλειας Πληροφοριών, Σωκράτης Κάτσικας”eudoxus link\n  “Ασφάλεια Πληροφοριακών Συστημάτων, Σωκτ. Κάτσικας - Δ. Γκρίτζαλης - Στεφ. Γκρίτζαλης”eudoxus link\n\n\n",
        categories: [],
        tags: [],
        id: 32
      });
      
    
      idx.add({
        title: "Introduction to the Theory of Computing",
        excerpt: "bibliography: ““Εισαγωγή στη θεωρία της πληροφορίας”, Αφράτη Φώτω, Εκδόσεις Συμμετρία, 1994” ““Εισαγωγή στη θεωρία Πληροφοριών, Κωδίκων και Κρυπτογραφίας”, Ν. Αλεξανδρής,...",
        categories: [],
        tags: [],
        id: 33
      });
      
    
      idx.add({
        title: "Internet Technologies",
        excerpt: "Bibliography: “Ανάπτυξη Web Εφαρμογών με PHP και MySQL”, Welling Luke,Thomson Laura, Εκδόσεις Α. Γκιούρδα, ISBN 960-512-357-6, 2005” “ΑΡΧΙΤΕΚΤΟΝΙΚΗ ΠΛΑΤΦΟΡΜΑΣ ΥΠΗΡΕΣΙΩΝ...",
        categories: [],
        tags: [],
        id: 34
      });
      
    
      idx.add({
        title: "Introduction to E-Government",
        excerpt: "bibliography: “Εισαγωγή στην ηλεκτρονική διακυβέρνηση, Πομπόρτσης Ανδρέας, Εκδόσεις ΤΖΙΟΛΑ, ISBN 960-418-083-5, 2006” “Ηλεκτρονική δημόσια διοίκηση, Αποστολάκης Ιωάννης Α., Λουκής Ευριπίδης...",
        categories: [],
        tags: [],
        id: 35
      });
      
    
      idx.add({
        title: "Introduction to Programming",
        excerpt: "bibliography: ““C Προγραμματισμός”, 7η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Χ. ΓΚΙΟΥΡΔΑ &amp; ΣΙΑ ΕΕ, ISBN 978-960-512-6414, 2014 (in greek)”...",
        categories: [],
        tags: [],
        id: 36
      });
      
    
      idx.add({
        title: "Linear Algebra",
        excerpt: "bibliography: “S. Barnett, Matrices Methods and Applications , Clarendon Press, Oxford, 1990.” “S. Barnett, Polynomial and Linear Control Systems, Dekker,...",
        categories: [],
        tags: [],
        id: 37
      });
      
    
      idx.add({
        title: "Logic Programming",
        excerpt: "bibliography:\n\n  “Ivan Bratko, Prolog Programming for Artificial Intelligence, 3rd Edition, Addison Wesley, 2000.”\n\n\n",
        categories: [],
        tags: [],
        id: 38
      });
      
    
      idx.add({
        title: "Management of IT Projects ",
        excerpt: "Bibliography:\n\n  “Διαχείριση έργων πληροφορικής, Κιουντούζης Ευάγγελος Α.”eudoxus link\n  “Διαχείριση έργου - project management, Burke Rory”eudoxus link\n\n",
        categories: [],
        tags: [],
        id: 39
      });
      
    
      idx.add({
        title: "Mathematical Programming",
        excerpt: "Bibliography:\n\n  “Ferguson S.T., Linear Programming: A Concise Introduction, University of California (UCLA)\n  (http://www.math.ucla.edu/~tom/LP.pdf)”\n\n",
        categories: [],
        tags: [],
        id: 40
      });
      
    
      idx.add({
        title: "Introduction to Information Systems",
        excerpt: "bibliography: “Κιουντούζης, Ε. (2009) Μεθοδολογίες Ανάλυσης και Σχεδιασμού Πληροφοριακών Συστημάτων, Εκδόσεις Μπένου (3η Έκδοση), Αθήνα.” “Avison, D., Fitzgerald, G. (2007)...",
        categories: [],
        tags: [],
        id: 41
      });
      
    
      idx.add({
        title: "Multimedia",
        excerpt: "bibliography: Τεχνολογία πολυμέσων, Δημητριάδης Σταύρος Ν., Πομπόρτσης Ανδρέας Σ., Τριανταφύλλου Ευάγγελος Γ., Εκδόσεις ΤΖΙΟΛΑ, ISBN 978-960-418-025-7, 2004 Πολυμέσα Θεωρία και...",
        categories: [],
        tags: [],
        id: 42
      });
      
    
      idx.add({
        title: "Networks I",
        excerpt: "bibliography: ““Δίκτυα Επικοινωνιών, ένα πρώτο μάθημα”, Jean Walrand, Μετάφραση-Επιμέλεια: Ιωάννης Σταυρακάκης, Λάζαρος Μεράκος, Εκδόσεις ΕΙΔΙΚΟΣ ΛΟΓΑΡΙΑΣΜΟΣ ΚΟΝΔΥΛΙΩΝ ΕΡΕΥΝΑΣ – ΕΚΠΑ,...",
        categories: [],
        tags: [],
        id: 43
      });
      
    
      idx.add({
        title: "Networks II",
        excerpt: "bibliography: ““ΔΙΚΤΥΑ ΥΠΟΛΟΓΙΣΤΩΝ: ΜΙΑ ΠΡΟΣΕΓΓΙΣΗ ΑΠΟ ΤΗ ΣΚΟΠΙΑ ΤΩΝ ΣΥΣΤΗΜΑΤΩΝ”, LARRY L. PETERSON, BRUCE S. DAVIE, Εκδόσεις Κλειδάριθμος, ISBN 978-960-461-266-6,...",
        categories: [],
        tags: [],
        id: 44
      });
      
    
      idx.add({
        title: "Object Oriented Programming",
        excerpt: "bibliography: ““Java προγραμματισμός”, 10η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Χ. ΓΚΙΟΥΡΔΑ ΣΙΑ ΕΕ, ISBN 978-960-512-6810, 2015 (in greek)” ““Java...",
        categories: [],
        tags: [],
        id: 45
      });
      
    
      idx.add({
        title: "Operating Systems",
        excerpt: "bibliography:\n\n  ““Λειτουργικά Συστήματα Αρχές Σχεδίασης”, William Stallings, 8η Έκδοση, Εκδόσεις Τζιόλα”\n  ““ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ ΣΕ UNIX”,MARC J. ROCHKIND, ΕΚΔΟΣΕΙΣ ΚΛΕΙΔΑΡΙΘΜΟΣ”\n\n\n",
        categories: [],
        tags: [],
        id: 46
      });
      
    
      idx.add({
        title: "Parallel Programming",
        excerpt: "bibliography: “Peter S. Pacheco, An Introduction to Parallel Programming, Morgan Kaufmann, 2011.” “Γραμματή Πάντζιου, Βασίλειος Μάμαλης, Αλέξανδρος Τομαράς , Εισαγωγή...",
        categories: [],
        tags: [],
        id: 47
      });
      
    
      idx.add({
        title: "Patern Recognition",
        excerpt: "bibliography: “Pattern Classification, R. O. Duda, P.E. Hart and D.G. Stork, Wiley, 2001.” “Pattern Recognition, S. Theodoridis and K. Koutroumbas,...",
        categories: [],
        tags: [],
        id: 48
      });
      
    
      idx.add({
        title: "Introduction to Quantum and DNA Computing",
        excerpt: "Bibliography: “ΚΒΑΝΤΙΚΟΙ ΥΠΟΛΟΓΙΣΤΕΣ: ΒΑΣΙΚΕΣ ΕΝΝΟΙΕΣ”, Ιωάννης Καραφυλλίδης, Εκδόσεις ΚΛΕΙΔΑΡΙΘΜΟΣ, ISBN 978-960-209-816-5, 2005.” “Το νέο κβαντικό σύμπαν”, T.HEY, P.WALTERS, Εκδόσεις ΑΛ....",
        categories: [],
        tags: [],
        id: 49
      });
      
    
      idx.add({
        title: "Computer security and data protection",
        excerpt: "bibliography: -“Gollmann, D. (2011). Computer Security, 3rd Edition. Wiley, New York.” -“Anderson, R. (2008). Security engineering – A guide to...",
        categories: [],
        tags: [],
        id: 50
      });
      
    
      idx.add({
        title: "Semantic and Social Web",
        excerpt: "Bibliography: “ΕΙΣΑΓΩΓΗ ΣΤΟ ΣΗΜΑΣΙΟΛΟΓΙΚΟ ΙΣΤΟ, GRIGORIS ANTONIOU, FRANK VAN HARMELEN”eudoxus link “Εξόρυξη γνώσης από βάσεις δεδομένων και τον παγκόσμιο ιστό,...",
        categories: [],
        tags: [],
        id: 51
      });
      
    
      idx.add({
        title: "Simulation and Modelling",
        excerpt: "bibliography: ““Προσομοίωση διακριτών συστημάτων”, Khoshnevis Behrokh, Εκδόσεις Δίαυλος, ISBN 978-960-531-031-8, 1999” ““Προσομοίωση δικτύων υπολογιστών”, Πομπόρτσης Ανδρέας Σ., Τσουλφάς Ανέστης Γ.,...",
        categories: [],
        tags: [],
        id: 52
      });
      
    
      idx.add({
        title: "Social and Legal Issues of ICTs",
        excerpt: "Bibliography:\n\n  “Το δίκαιο του διαδικτύου (internet), Σιδηρόπουλος Θεόδωρος”eudoxus link\n  “Το δίκαιο του ηλεκτρονικού εμπορίου, Αλεξανδρίδου Ελίζα Δ.”eudoxus link\n\n\n",
        categories: [],
        tags: [],
        id: 53
      });
      
    
      idx.add({
        title: "Software Engineering",
        excerpt: "bibliography: ““Ο ΠΡΑΚΤΙΚΟΣ ΠΡΟΓΡΑΜΜΑΤΙΣΤΗΣ”, ANDREW HUNT, DAVID THOMAS, Εκδόσεις Κλειδάριθμος, ISBN 978-960-461-135-5, 2008” ““ΑΝΑΓΝΩΣΗ ΚΩΔΙΚΑ”, ΔΙΟΜΗΔΗΣ ΣΠΙΝΕΛΛΗΣ, Εκδόσεις Κλειδάριθμος, ISBN...",
        categories: [],
        tags: [],
        id: 54
      });
      
    
      idx.add({
        title: "Special Topics in Systems Security",
        excerpt: "Βιβλιογραφία: ” ΒΑΣΙΚΕΣ ΑΡΧΕΣ ΑΣΦΑΛΕΙΑΣ ΔΙΚΤΥΩΝ: ΕΦΑΡΜΟΓΕΣ ΚΑΙ ΠΡΟΤΥΠΑ”, WILLIAM STALLINGS eudoxos link ” Ασφάλεια Πληροφοριακών Συστημάτων”, Σωκτ. Κάτσικας -...",
        categories: [],
        tags: [],
        id: 55
      });
      
    
      idx.add({
        title: "Speech Processing",
        excerpt: "Bibliography:\n\n  “Ψηφιακή επεξεργασία σήματος, Antoniou A.”eudoxus link\n  “Ψηφιακή Επεξεργασία Φωνής: Θεωρία και Εφαρμογές, Rabiner L.”eudoxus link\n\n\n",
        categories: [],
        tags: [],
        id: 56
      });
      
    
      idx.add({
        title: "Statistics",
        excerpt: "bibliography: “Περιγραφική και διερευνητική στατιστική ανάλυση δεδομένων”, Γεωργιακώδης Φώτης A.,Τσίμπος Κλέων Χ., Εκδόσεις Σταμούλη, ISBN 978-960-351-315-6, 2000” “Πιθανότητες, τυχαίες μεταβλητές...",
        categories: [],
        tags: [],
        id: 57
      });
      
    
      idx.add({
        title: "Strategic Management of Information Systems",
        excerpt: "Bibliography: “ΠΛΗΡΟΦΟΡΙΑΚΑ ΣΥΣΤΗΜΑΤΑ ΔΙΟΙΚΗΣΗΣ, KENNETH C. LAUDON, JANE P. LAUDON”eudoxus link “ΚΑΙΝΟΤΟΜΙΑ, ΣΤΡΑΤΗΓΙΚΗ, ΑΝΑΠΤΥΞΗ ΚΑ ΠΛΗΡΟΦΟΡΙΑΚΑ ΣΥΣΤΗΜΑΤΑ, Γεώργιος Δουκίδης”eudoxus link...",
        categories: [],
        tags: [],
        id: 58
      });
      
    
      idx.add({
        title: "Theory of Probability",
        excerpt: "bibliography: “ΕΙΣΑΓΩΓΗ ΣΤΗ ΘΕΩΡΙΑ ΠΙΘΑΝΟΤΗΤΩΝ”, HOEL P., PORT S., STONE C., Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ ΕΚΔΟΣΕΙΣ ΚΡΗΤΗΣ, ISBN 978-960-524-156-8, 2009” “Πιθανότητες, τυχαίες...",
        categories: [],
        tags: [],
        id: 59
      });
      
    
  

  
    
    
      idx.add({
        title: "Posts by Category",
        excerpt: "conference Διοργάνωση συνεδρίου του έργου ADRIATinn Το Τμήμα Πληροφορικής του Ιονίου Πανεπιστημίου ανακοινώνει τη διοργάνωση συνεδρίου του έργου ADRIATinn, στο...",
        categories: [],
        tags: [],
        id: 60
      });
      
    
      idx.add({
        title: "Undergraduate Courses",
        excerpt: "Approximately 100 students enter the Department of Informatics every year after taking the Panhellenic Admission Examinations. Also, 10% of the...",
        categories: [],
        tags: [],
        id: 61
      });
      
    
      idx.add({
        title: "Faculty",
        excerpt: "Professors Vassilis Chrissikopoulos IT – Networks – Information Security Panagiotis Vlamos Mathematics in Application Modelling Assοciate Professors Dimitrios Tsoumakos Data...",
        categories: [],
        tags: [],
        id: 62
      });
      
    
      idx.add({
        title: "Groups",
        excerpt: "Bioinformatics and Human Electrophysiology Lab (BiHELab) The Bioinformatics and Human Electrophysiology Lab focus on recent advances in geriatrics and neurodegeneration,...",
        categories: [],
        tags: [],
        id: 63
      });
      
    
      idx.add({
        title: "Department of Informatics",
        excerpt: "Super Customizable Everything from the menus, sidebars, comments, and more can be configured or set with YAML Front Matter. Learn...",
        categories: [],
        tags: [],
        id: 64
      });
      
    
      idx.add({
        title: "Index",
        excerpt: "",
        categories: [],
        tags: [],
        id: 65
      });
      
    
      idx.add({
        title: "MSc Courses",
        excerpt: "Administrative Information Systems A. Exploitation of Information Technology by Organizations: Importance of Information Technology in Modern Organizations. Strategic Planning IT...",
        categories: [],
        tags: [],
        id: 66
      });
      
    
      idx.add({
        title: "Pages",
        excerpt: "&lt;h2 id=\"courses\" class=\"archive__subtitle\"&gt;courses&lt;/h2&gt; &lt;h2 id=\"courses-en\" class=\"archive__subtitle\"&gt;courses-en&lt;/h2&gt; Artificial Inteligence Aim and scope of AI. Historical data. Problem Solving. Search. Blind and...",
        categories: [],
        tags: [],
        id: 67
      });
      
    
      idx.add({
        title: "News",
        excerpt: "2017 Special Issue in Computational Aspects Related to Unconventional, Bioinspired and Quantum Methods The following special issue, of which we...",
        categories: [],
        tags: [],
        id: 68
      });
      
    
      idx.add({
        title: "Projects",
        excerpt: "Cultural Understanding through Learning and Technology (CULT) Project CULT aims to create a cooperation platform between schools that reside in...",
        categories: [],
        tags: [],
        id: 69
      });
      
    
      idx.add({
        title: "Search",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 70
      });
      
    
      idx.add({
        title: "Faculty Research Interests",
        excerpt: "Risk Perceptions and User Awareness XPath) e-Government and Information Systems Applied stochastic processes Markos Avlonitis Applied Stohastic Models Autonomic Networks...",
        categories: [],
        tags: [],
        id: 71
      });
      
    
  

  

  
    
    
      idx.add({
        title: "Theodore Andronikos",
        excerpt: "education: “Diploma in Computer Engineering, School of Electrical and Computer Engineering, National technical University of Athens” “Ph.D. in “Automatic Parallelization...",
        categories: [],
        tags: ["Internet Programming","Dynamic algorithms for parallel and distributed systems","Query languages for the web (XML, XPath)","Temporal logics for automated synthesis and verification of reactive systems"],
        id: 72
      });
      
    
      idx.add({
        title: "Aggeliki Tsohou",
        excerpt: "education: “B.Sc. in Informatics, Department of Informatics, Athens University of Economics and Business, Greece” “M.Sc. in Information Systems, Department of...",
        categories: [],
        tags: ["Information Security Policies, Risk Perceptions and User Awareness","Information Security Risk Assessment and Management","Security Policies for Acceptable Internet Use","Privacy Enhancing Tools","Privacy Protection in Mobile Applications","Information Security and Privacy Standards","Theory Development and Research Methods in Information Systems","e-Services, e-Government and Information Systems"],
        id: 73
      });
      
    
      idx.add({
        title: "Markos Avlonitis",
        excerpt: "education: “Degree in Physics, School of Sciences, Department of Physics, Aristotle University of Thessaloniki (AUT)” “M.Sc. in Physics of Materials,...",
        categories: [],
        tags: ["Applied stochastic processes","Self-organized systems","Modeling the spread of computer malware","Modeling and simulation of large scale networks"],
        id: 74
      });
      
    
      idx.add({
        title: "Konstantinos Chorianopoulos",
        excerpt: "Education: “Diploma in Electronic and Computer Engineering, Technical University of Crete” “MSc. Marketing and Communication, Athens University of Economics and...",
        categories: [],
        tags: ["Computer-Supported Collaborative Work"],
        id: 75
      });
      
    
      idx.add({
        title: "Christos Anagnostopoulos",
        excerpt: "education: “B.Sc., Informatics and Telecommunications, National and Kapodistrian University of Athens, 2001, Concentrations: Computational Systems and Applications” “M.Sc., Informatics and...",
        categories: [],
        tags: ["Mobile and Distributed Computing","Context-aware and Pervasive Computing","Wireless Sensor Networks","Network-centric Information Systems"],
        id: 76
      });
      
    
      idx.add({
        title: "Dimitrios Tsoumakos",
        excerpt: "education: “Diploma in Electrical and Computer Engineering, School of Electrical and Computer Engineering, National Technical University of Athens, Greece. Title...",
        categories: [],
        tags: ["Distributed Data Management","Data management in Cloud Computing","Internet Databases and DataWarehouses"],
        id: 77
      });
      
    
      idx.add({
        title: "Emmanouil Magos",
        excerpt: "education: “Diploma in Computer Science, University of Piraeus” “Ph.D. in Secure Electronic Transaction systems over the Internet, Computer Science Department,...",
        categories: [],
        tags: ["Cryptographic techniques for computer and network security","Security and Privacy in Internet applications"],
        id: 78
      });
      
    
      idx.add({
        title: "Phivos Mylonas",
        excerpt: "education: “Diploma in Electrical and Computer Engineering, School of Electrical and Computer Engineering, N.T.U.A., 2001” “Ph.D. in Engineering, School of...",
        categories: [],
        tags: ["Knowledge-assisted multimedia analysis","Multimedia information retrieval","Multimedia personalization","User adaptation","User modeling","User profiling","Visual context representation and analysis","Human-computer interaction"],
        id: 79
      });
      
    
      idx.add({
        title: "Katia Lida Kermanidis",
        excerpt: "education: “Diploma from the Electrical and Computer Engineering Department, University of Patras” “PhD in Automatic Learning of Syntactic Dependencies And...",
        categories: [],
        tags: ["Machine Learning","Natural Language Processing","User Modeling","Humanistic Informatics"],
        id: 80
      });
      
    
      idx.add({
        title: "Michalis Stefanidakis",
        excerpt: "education: “Diploma of Computer Engineering and Informatics, University of Patras” “Ph.D. in Design and Performance Evaluation of Distributed Memory Parallel...",
        categories: [],
        tags: ["High-Performance Distributed Computer Systems","Real-time Embedded System Architectures","Pervasive Computing Systems"],
        id: 81
      });
      
    
      idx.add({
        title: "Konstantinos Oikonomou",
        excerpt: "education: “Diploma in Computer Engineering and Informatics, University of Patras, Greece” “MSc in Communication and Signal Processing from the Electrical...",
        categories: [],
        tags: ["Autonomic Networks","Network Performance Analysis","Medium Access Control"],
        id: 82
      });
      
    
      idx.add({
        title: "Adamantia Pateli",
        excerpt: "education: “Diploma in Informatics, Athens University of Economics and Business” “ΜSc in Electronic Commerce, University of Manchester Institute of Science...",
        categories: [],
        tags: ["Information Systems","E-Business & E-Governement","Mobile & Wireless Services","Strategic Management of ICT"],
        id: 83
      });
      
    
      idx.add({
        title: "Panagiotis Kourouthanassis",
        excerpt: "education: “BSc in Informatics, Athens University of Economics and Business” “MSc in Decision Sciences, Athens University of Economics and Business”...",
        categories: [],
        tags: ["Electronic Business","Electronic Government","Information Systems Management"],
        id: 84
      });
      
    
      idx.add({
        title: "Spyros Sioutas",
        excerpt: "education: “Graduated of the Computer Engineering and Informatics department (University of Patras).Diploma Thesis: “A multimedia Information System for the city...",
        categories: [],
        tags: ["Efficient I/O Algorithms & Data Structures","Computational Geometry and Computer Graphics","Spatio-Temporal and Multimedia Databases","Distributed Data Structures and Peer-to-Peer Computing","Parallel and Distributed Data Structures and Cloud Computing","Knowledge Data Discovery (KDD)","Data Mining Algorithms","Spatial Data Structures and Geographical Information Systems"],
        id: 85
      });
      
    
      idx.add({
        title: "Vassilis Chrissikopoulos",
        excerpt: "education: “Diploma in Mathematics, Aristotle University of Thessaloniki” “MSc Industrial Research, Chelsea College, London University” “PhD Royal Holloway, London University”...",
        categories: [],
        tags: ["Security","Computer Networks"],
        id: 86
      });
      
    
      idx.add({
        title: "Panagiotis Vlamos",
        excerpt: "education:\n\n  “Diploma in Mathematics, University of Athens”\n  “Ph.D. in Mathematics, Department of Mathematics, National Technical University of Athens”\n\n\n",
        categories: [],
        tags: ["Mathematical modeling applied for image restoration purposes","Mathematical modeling applied to physical and Chemical Engineering problems","Mathematical modeling in Education with the use of new technologies"],
        id: 87
      });
      
    
  

  

  

  
    
    
      idx.add({
        title: "Bioinformatics and Human Electrophysiology Lab (BiHELab)",
        excerpt: "BiHELab interests lie within educational, research and development activities in the areas of neurogenerative diseases and their relations with mitochondrial...",
        categories: [],
        tags: [],
        id: 88
      });
      
    
      idx.add({
        title: "Computational Modeling Lab (CMODLab)",
        excerpt: "The fields of current research interest in the Laboratory of Computational Modeling in the Department of Informatics of the Ionian...",
        categories: [],
        tags: [],
        id: 89
      });
      
    
      idx.add({
        title: "Humanistic and Social Informatics Lab (HILab)",
        excerpt: "On the other hand, it employs methodologies adapted from these scientific and artistic areas in order to supply ICT products...",
        categories: [],
        tags: [],
        id: 90
      });
      
    
      idx.add({
        title: "Information Systems and Databases Laboratory (ISDLab)",
        excerpt: "The main focus of the Information Systems research actions is on: Management Information Systems (MIS) Strategic Decision Making Business Intelligence...",
        categories: [],
        tags: [],
        id: 91
      });
      
    
      idx.add({
        title: "Networks, Multimedia and Security Systems Laboratory (NMSLab)",
        excerpt: "The education role of NMSLab is to support courses in computer networks, multimedia systems with respect to cultural applications, computer...",
        categories: [],
        tags: [],
        id: 92
      });
      
    
      idx.add({
        title: "Quantum and UnconventIonal CompuTing Laboratory(QUITLab)",
        excerpt: "Our current areas of research include: Quantum Automata Automata on infinite inputs Modeling with Membrane automata SPARQL Queries and Finite...",
        categories: [],
        tags: [],
        id: 93
      });
      
    
  

  

  
    
    
      idx.add({
        title: "Administrative Information Systems",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 94
      });
      
    
      idx.add({
        title: "Artificial Intelligence",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 95
      });
      
    
      idx.add({
        title: "Interaction Design",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 96
      });
      
    
      idx.add({
        title: "Research Methods",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 97
      });
      
    
  

  

  
    
    
      idx.add({
        title: "Alexandros Panaretos ",
        excerpt: "education:\n\n  “BEng Software Engineering, Univerisity of Wales, Aberystwyth”\n  “MSc E-Commerce Technology, Essex University”\n\n",
        categories: [],
        tags: ["Internet programming","Databases","Content Management Systems","Social and Cooperative Networks"],
        id: 98
      });
      
    
      idx.add({
        title: "Athanasios Alexiou",
        excerpt: "education:\n\n  PhD in Bioinformatics, Ionian University\n\n",
        categories: [],
        tags: ["Bioinformatics"],
        id: 99
      });
      
    
      idx.add({
        title: "Elena Laskari",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 100
      });
      
    
      idx.add({
        title: "Varvara Garneli",
        excerpt: "education: BSc in Informatics, Athens University of Economics and Business MSc in Informatics and Humanistic Studies, Ionian University PhD in...",
        categories: [],
        tags: ["Computing Education"],
        id: 101
      });
      
    
      idx.add({
        title: "Konstantinos Giannakis",
        excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in the...",
        categories: [],
        tags: ["Theoretical Computer Science"],
        id: 102
      });
      
    
      idx.add({
        title: "Ioannis Karydis",
        excerpt: "education: “Phd , Auth, thesis: Mining and retrieval methods for acoustic and symbolic musical data.” “MSc Advanced Methods in Computer...",
        categories: ["HILab"],
        tags: ["Decision Support Systems","Speech and Audio Processing"],
        id: 103
      });
      
    
      idx.add({
        title: "Patrick Mikalef",
        excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science in Business Informatics(MSc),Utrecht University PhD in IT Strategy,Ionian...",
        categories: [],
        tags: ["IT Strategy"],
        id: 104
      });
      
    
      idx.add({
        title: "Ilias Pappas",
        excerpt: "education:\n\n  PhD in E-Commerce,Ionian University, Dept. of Informatics\n\n",
        categories: [],
        tags: ["E-Commerce"],
        id: 105
      });
      
    
      idx.add({
        title: "George Paxinos",
        excerpt: "education:\n",
        categories: [],
        tags: ["Neuroscience"],
        id: 106
      });
      
    
      idx.add({
        title: "Maria Psiha",
        excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in Bioinformatics,Ionian...",
        categories: [],
        tags: ["Bioinformatics"],
        id: 107
      });
      
    
      idx.add({
        title: "Spiros Voulgaris",
        excerpt: "education: “Bachelor, Department of Electrical and Mechanical Engineering Computer, National Technical University of Athens” “Graduate, Department of Archives and Librarianship,...",
        categories: [],
        tags: [],
        id: 108
      });
      
    
      idx.add({
        title: "Swtiria-Sofia Aroniada",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 109
      });
      
    
      idx.add({
        title: "Bernd Wegner",
        excerpt: "education:\n",
        categories: [],
        tags: ["Mathematics"],
        id: 110
      });
      
    
  

  

  
    
    
      idx.add({
        title: "Special Issue in Computational Aspects Related to Unconventional, Bioinspired and Quantum Methods",
        excerpt: "The following special issue, of which we are the guest editors will be published in “Computation” (ISSN 2079-3197, http://www.mdpi.com/journal/computation), and...",
        categories: ["journal","QUIT"],
        tags: [],
        id: 111
      });
      
    
      idx.add({
        title: "5th workshop on Medical Physics and Biomedical Engineering",
        excerpt: "The topics of the workshop include Hybrid Imaging and Personalized Medicine Radiation Protection in Medical Physics Innovation in Medical Physics...",
        categories: ["workshop"],
        tags: [],
        id: 112
      });
      
    
  

  

  
    
    
      idx.add({
        title: "Cultural Understanding through Learning and Technology (CULT)",
        excerpt: "CULT (MC-ERG-2008-230894) is a Marie Curie European Reintegration Grants (ERG) project funded by the European Commission (EC) under the 7th...",
        categories: [],
        tags: [],
        id: 113
      });
      
    
      idx.add({
        title: "Discovery Space(D-Space)",
        excerpt: "The D-Space project’s main objectives are: The demonstration and piloting of the D-Space service to the target users in real...",
        categories: [],
        tags: [],
        id: 114
      });
      
    
      idx.add({
        title: null,
        excerpt: "Dakos (Olive Fly) is the most severe enemy of olive production, causing each year important economic damage, in the form...",
        categories: [],
        tags: null,
        id: 115
      });
      
    
      idx.add({
        title: "ENCOURAGEMENT OF ENTERPRISING ACTION, INNOVATIVE APPLICATIONS AND COURSES OF CHOICE OF STUDENTS",
        excerpt: "\n",
        categories: [],
        tags: [],
        id: 116
      });
      
    
      idx.add({
        title: "Platform for trans-Academic Cooperation in Innovation(PaCiNNo)",
        excerpt: "The goal of PACiNNO is to establish a platform for cooperation in research and innovation covering the whole Adriatic region....",
        categories: [],
        tags: [],
        id: 117
      });
      
    
      idx.add({
        title: "PromO(nto)tion",
        excerpt: "Archimedes III – National Strategic Reference Framework (NSRF) 2007-2013 Duration: 01/2012-12/2014 PromO(nto)tion proposes the development of a semantic thesaurus of...",
        categories: [],
        tags: [],
        id: 118
      });
      
    
      idx.add({
        title: "Translation for Massive Open Online Courses(TraMOOC)",
        excerpt: "Duration: 01/02/2015 – 31/01/2018 Programme: Ηorizon 2020 Budget: 3,270,710.00€ Massive Open Online Courses have been growing rapidly in size and...",
        categories: [],
        tags: [],
        id: 119
      });
      
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
  
    
      
      
      
        
        {
          "title": "Artificial Inteligence",
          "url": "/site-gem/en/courses/ai/",
          "excerpt": "bibliography: ““ΤΕΧΝΗΤΗ ΝΟΗΜΟΣΥΝΗ: ΜΙΑ ΣΥΓΧΡΟΝΗ ΠΡΟΣΕΓΓΙΣΗ”, Russell S., Norvig P. ΕΚΔΟΣΕΙΣ ΚΛΕΙΔΑΡΙΘΜΟΣ ΕΠΕ, ISBN 960-209-873-2, 2005” ““Τεχνητή Nοημοσύνη”, 3η έκδοση,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Algorithms",
          "url": "/site-gem/en/courses/algorithms/",
          "excerpt": "bibliography: ““Introduction to Algorithms vol I”, CORMEN T.H., LEISERSON C.E., RIVEST R.L., STEIN C., ITE Publications, ISBN 978-960-524-225-1, 2009 (in...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Business Administration",
          "url": "/site-gem/en/courses/ba/",
          "excerpt": "bibliography:\n\n  ““ORGANIZATION THORY AND DESIGN”, RICHARD L. DAFT, Klidarithos Publications, ISBN 960-209-846-5, 2005 (in Greek)”\n\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Big Data Management Technologies ",
          "url": "/site-gem/en/courses/big-data-management-technologies/",
          "excerpt": "Bibliography: “Εξόρυξη από Μεγάλα Σύνολα Δεδομένων, Anand Rajaraman, Jeffrey David Ullman”eudoxus link ” Η ΜΕΘΟΔΟΣ PAGERANK ΤΗΣ GOOGLE ΚΑΙ ΑΛΛΑ...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Calculus",
          "url": "/site-gem/en/courses/calculus/",
          "excerpt": "bibliography : “Calculus, Volume I, Finney, Weir, Giordano, Crete University Press 2006.” “Vector Calculus, J. Marden and A. Tromba, University...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Compilers",
          "url": "/site-gem/en/courses/compilers/",
          "excerpt": "Bibliography: ” Compilers, Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman” eudoxus link ” Compilers, Παπασπύρου Νικόλαος...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to the Theory of Computation",
          "url": "/site-gem/en/courses/computation-theory/",
          "excerpt": "bibliography: ““Introduction to the Theory of Computation”, SIPSER MICHAEL, ITE Publications, ISBN 978-960-524-243-5, 2009 (in greek)” ““Elements of the Theory...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Computer Architecture",
          "url": "/site-gem/en/courses/computer-architecture/",
          "excerpt": "bibliography: “D.A.Patterson &amp; J.L.Hennessy, Computer Organization and Design, Fourth Edition, Morgan Kaufmann, 2011.” “W. Stallings, Computer Organization and Architecture (9th...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Computer Graphics",
          "url": "/site-gem/en/courses/computer-graphics/",
          "excerpt": "Bibliography: “Γραφικά και Οπτικοποίηση”, Θεοχάρης Θ., Πλατής Ν., Παπαϊωάννου Γ., Πατρικαλάκης Ν., Εκδόσεις Συμμετρία, ISBN 978-960-266-296-0, 2010”eudoxus link “Γραφικά με...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Computer Programming",
          "url": "/site-gem/en/courses/computer-programming/",
          "excerpt": "Bibliography: “C++ Προγραμματισμός”, 6η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Α. Γκιούρδα &amp; ΣΙΑ ΟΕ, ISBN 978-960-512-5912, 2011 (in greek)...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Teaching Informatics",
          "url": "/site-gem/en/courses/computing-education/",
          "excerpt": "Bibliography: “Εισαγωγή στη διδακτική της πληροφορικής, Βασίλης Ι. Κόμης, Εκδόσεις Κλειδάριθμος” “Εισαγωγή στη διδακτική της πληροφορικής, Ν. Αλεξανδρής, Β. Μπελεσιώτης,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Cryptography",
          "url": "/site-gem/en/courses/cryptography/",
          "excerpt": "Bibliography: “Κρυπτογραφία και ασφάλεια δικτύων – αρχες και εφαρμογες. William Stallings, ΙΩΝ 2012.”eudoxus link “Σύγχρονη Κρυπτογραφία – Θεωρία και Εφαρμογές....",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Mobile and Social Media",
          "url": "/site-gem/en/courses/cscw/",
          "excerpt": "bibliography: ““Επικοινωνία ανθρώπου – υπολογιστή, 3ή Έκδοση”, Dix Alan J., Finlay Janet E., Abowd Gregory D., Beale Russell, Εκδόσεις Α....",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Data Mining and Data Warehousing",
          "url": "/site-gem/en/courses/data-mining-and-data-warehousing/",
          "excerpt": "Bibliography: “Εισαγωγή στην εξόρυξη δεδομένων, Tan Pang - Ning,Steinbach Michael,Kumar Vipin” eudoxus link “Εισαγωγή στην Εξόρυξη Δεδομένων και τις Αποθήκες...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Data Structures",
          "url": "/site-gem/en/courses/data-structures/",
          "excerpt": "bibliography: “Δομές δεδομένων, αλγόριθμοι και εφαρμογές C++”, Sahnii Sartaj, Εκδόσεις ΤΖΙΟΛΑ, ISBN 978-960-418-030-1, 2004” “ΔΟΜΕΣ ΔΕΔΟΜΕΝΩΝ”, ΓΕΩΡΓΑΚΟΠΟΥΛΟΣ Γ.Φ., Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Databases I",
          "url": "/site-gem/en/courses/databases1/",
          "excerpt": "bibliography: “Συστήματα Βάσεων Δεδομένων”, Silberschatz, Korth, Suda, Εκδόσεις Α. Γκιούρδα, ISBN 978-960-512-384-0, 2004” ““ΣΧΕΔΙΑΣΜΟΣ ΒΑΣΕΩΝ ΔΕΔΟΜΕΝΩΝ”, ΓΕΩΡΓΙΟΣ ΒΑΣΙΛΑΚΟΠΟΥΛΟΣ, Εκδόσεις Γ....",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Databases II",
          "url": "/site-gem/en/courses/databases2/",
          "excerpt": "bibliography: ““Θεμελιώδεις αρχές συστημάτων βάσεων δεδομένων”, Elmasri Ramez,Navathe Shamkant B, Εκδόσεις Δίαυλος, ISBN 978-960-531-220-6, 2008” ““Συστήματα Βάσεων Δεδομένων”, Ιωάννης Μανωλόπουλος...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Digital Image Processing",
          "url": "/site-gem/en/courses/digit-image-process/",
          "excerpt": "Bibliography: “ΨΗΦΙΑΚΗ ΕΠΕΞΕΡΓΑΣΙΑ ΕΙΚΟΝΑΣ”, ΙΩΑΝΝΗΣ ΠΗΤΑΣ, Εκδόσεις ΙΩΑΝΝΗΣ ΠΗΤΑΣ, 2010” “Ψηφιακή Επεξεργασία και Ανάλυση Εικόνας”, Παπαμάρκος Νικόλαος, Αυτοέκδοση, ISBN 978-960-92731-3-8,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Discrete Mathematics",
          "url": "/site-gem/en/courses/discrete-mathematics/",
          "excerpt": "Bibliography: “Discrete Mathematics: Mathematics of Computer Science, L. Kyrousis, Ch. Bouras and P. Spyrakis, Gutenberg, 1992” “Discrete Mathematics: Problems and...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Distributed Network Systems",
          "url": "/site-gem/en/courses/distributed-network-systems/",
          "excerpt": "Βιβλιογραφία: ““ΚΑΤΑΝΕΜΗΜΕΝΑ ΣΥΣΤΗΜΑΤΑ: ΑΡΧΕΣ ΚΑΙ ΥΠΟΔΕΙΓΜΑΤΑ”, ANDREW S. TANENBAUM, MAARTEN VAN STEEN” eudoxus link ““ΚΑΤΑΝΕΜΗΜΕΝΑ ΣΥΣΤΗΜΑΤΑ ΜΕ JAVA”, Ι. Κ....",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Decision Support Systems",
          "url": "/site-gem/en/courses/dss/",
          "excerpt": "Bibliography: “Συστήματα υποστήριξης αποφάσεων”, Ματσατσίνης Ν., Εκδόσεις Νέων Τεχνολογιών, 2010, ISBN 978-960-6759-44-4 eudoxus link “Διοικητική επιστήμη”, Πραστάκος Γρηγόρης Π., Εκδόσεις...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to E-Government",
          "url": "/site-gem/en/courses/e-government/",
          "excerpt": "Bibliography: “”Εισαγωγή στην ηλεκτρονική διακυβέρνηση” , Πομπόρτσης Ανδρέας, Εκδόσεις ΤΖΙΟΛΑ, ISBN 960-418-083-5, 2006” eudoxus link “”Ηλεκτρονική δημόσια διοίκηση” , Αποστολάκης...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Entertainment Technology Software and Virtual Worlds",
          "url": "/site-gem/en/courses/entertainment-technology-software-and-virtual-worlds/",
          "excerpt": "Bibliography:\n\n  “ΒΙΝΤΕΟΠΑΙΧΝΙΔΙΑ: ΒΙΟΜΗΧΑΝΙΑ ΚΑΙ ΑΝΑΠΤΥΞΗ, ΚΩΣΤΑΣ ΑΝΑΓΝΩΣΤΟΥ”eudoxus link\n  “Εικονικά περιβάλλοντα πληροφόρησης, Κόκοτος Δημήτριος Χ.”eudoxus link\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Innovation and Entrepreneurship",
          "url": "/site-gem/en/courses/entrepreneurship-innovation/",
          "excerpt": "Bibliography: “Η. Γ. Καραγιάννης, Ι. Λ. Μπακούρος, “Καινοτομία &amp; Επιχειρηματικότητα: Θεωρία – Πράξη”, Εκδόσεις Σοφία, 2010.” “Πιπερόπουλος Πάνος Γ., “”Επιχειρηματικότητα,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Human-Computer Interaction",
          "url": "/site-gem/en/courses/hci/",
          "excerpt": "bibliography: “Επικοινωνία ανθρώπου – υπολογιστή, 3ή Έκδοση, Dix Alan J., Finlay Janet E., Abowd Gregory D., Beale Russell, Εκδόσεις Α....",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Computers and the Humanities",
          "url": "/site-gem/en/courses/humanistic-informatics/",
          "excerpt": "Bibliography: “ΤΕΧΝΟΛΟΓΙΕΣ ΠΛΗΡΟΦΟΡΙΩΝ ΚΑΙ ΕΠΙΚΟΙΝΩΝΙΑΣ &amp; ΚΟΙΝΩΝΙΑ, Ιωάννης Σ. Κουμπούρος”eudoxus link “Υπηρεσίες προστιθέμενης αξίας στο διαδίκτυο, Μήλιου Αμαλία Ν.,Πομπόρτσης Ανδρέας...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to Computer Science",
          "url": "/site-gem/en/courses/ics/",
          "excerpt": "bibliography: “Εισαγωγή στη σύγχρονη επιστήμη των υπολογιστών, Lister Andrew M., Εκδόσεις Δίαυλος, ISBN 978-960-7140-65-4, 2000” “Εισαγωγή στην επιστήμη των Υπολογιστών,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Information Privacy and Security Policies and Enhancing Technologies",
          "url": "/site-gem/en/courses/info-privacy-security-polices-enhancing-tech/",
          "excerpt": "bibliography: “Andreas Pfitzmann, Marit Hansen (2010) A Terminology for talking about Privacy by data minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Analysis and Design of Information Systems",
          "url": "/site-gem/en/courses/info-systems-analysis-and-design/",
          "excerpt": "bibliography: “Alan Dennis. Barbara Haley Wixom, David Tegarden (2010) Ανάλυση &amp; Σχεδιασμός Συστημάτων με τη UML 2.0: Μια αντικειμενοστρεφής Προσέγγιση,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Ιnformation and Κnowledge Representation",
          "url": "/site-gem/en/courses/information-and-knowledge-representation/",
          "excerpt": "Bibliography: “Εξόρυξη γνώσης από βάσεις δεδομένων και τον παγκόσμιο ιστό, Βαζιργιάννης Μιχάλης, Χαλκίδη Μαρία”eudoxus link “Εισαγωγή στην εξόρυξη δεδομένων, Tan...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Information Retrieval",
          "url": "/site-gem/en/courses/information-retrieval/",
          "excerpt": "Βιβλιογραφία: “ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΑΝΑΚΤΗΣΗ ΠΛΗΡΟΦΟΡΙΩΝ”, CHRISTOPHER D. MANNING, PRABHAKAR RAGHAVAN, HINRICH eudoxus link “Ανάκτηση Πληροφορίας”, 2η Έκδοση, Baeza-Yates Ricardo, Ribeiro-Neto...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Information Systems and Supply Management",
          "url": "/site-gem/en/courses/information-systems-and-supply-management/",
          "excerpt": "Βιβλιογραφία: -“Πληροφοριακά Συστήματα Διαχείρισης Επιχειρησιακών Πόρων:Στρατηγικές &amp; Εφαρμογές, Γιάννης Πολλάλης, Αθανάσιος Βοζίκης”eudoxus link -“ΣΥΓΧΡΟΝΑ ΕΠΙΧΕΙΡΗΣΙΑΚΑ ΣΥΣΤΗΜΑΤΑ, ΚΩΝΣΤΑΝΤΙΝΟΣ Ι. ΣΤΕΦΑΝΟΥ, ΧΡΗΣΤΟΣ...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Information Systems Security Management",
          "url": "/site-gem/en/courses/information-systems-security-management/",
          "excerpt": "Bibliography:\n\n  “Διαχείριση Ασφάλειας Πληροφοριών, Σωκράτης Κάτσικας”eudoxus link\n  “Ασφάλεια Πληροφοριακών Συστημάτων, Σωκτ. Κάτσικας - Δ. Γκρίτζαλης - Στεφ. Γκρίτζαλης”eudoxus link\n\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to the Theory of Computing",
          "url": "/site-gem/en/courses/information-theory/",
          "excerpt": "bibliography: ““Εισαγωγή στη θεωρία της πληροφορίας”, Αφράτη Φώτω, Εκδόσεις Συμμετρία, 1994” ““Εισαγωγή στη θεωρία Πληροφοριών, Κωδίκων και Κρυπτογραφίας”, Ν. Αλεξανδρής,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Internet Technologies",
          "url": "/site-gem/en/courses/internet-technologies/",
          "excerpt": "Bibliography: “Ανάπτυξη Web Εφαρμογών με PHP και MySQL”, Welling Luke,Thomson Laura, Εκδόσεις Α. Γκιούρδα, ISBN 960-512-357-6, 2005” “ΑΡΧΙΤΕΚΤΟΝΙΚΗ ΠΛΑΤΦΟΡΜΑΣ ΥΠΗΡΕΣΙΩΝ...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to E-Government",
          "url": "/site-gem/en/courses/introduction-to-e_government/",
          "excerpt": "bibliography: “Εισαγωγή στην ηλεκτρονική διακυβέρνηση, Πομπόρτσης Ανδρέας, Εκδόσεις ΤΖΙΟΛΑ, ISBN 960-418-083-5, 2006” “Ηλεκτρονική δημόσια διοίκηση, Αποστολάκης Ιωάννης Α., Λουκής Ευριπίδης...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to Programming",
          "url": "/site-gem/en/courses/itp/",
          "excerpt": "bibliography: ““C Προγραμματισμός”, 7η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Χ. ΓΚΙΟΥΡΔΑ &amp; ΣΙΑ ΕΕ, ISBN 978-960-512-6414, 2014 (in greek)”...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Linear Algebra",
          "url": "/site-gem/en/courses/linear-algebra/",
          "excerpt": "bibliography: “S. Barnett, Matrices Methods and Applications , Clarendon Press, Oxford, 1990.” “S. Barnett, Polynomial and Linear Control Systems, Dekker,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Logic Programming",
          "url": "/site-gem/en/courses/logic-programming/",
          "excerpt": "bibliography:\n\n  “Ivan Bratko, Prolog Programming for Artificial Intelligence, 3rd Edition, Addison Wesley, 2000.”\n\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Management of IT Projects ",
          "url": "/site-gem/en/courses/management-of-it-projects/",
          "excerpt": "Bibliography:\n\n  “Διαχείριση έργων πληροφορικής, Κιουντούζης Ευάγγελος Α.”eudoxus link\n  “Διαχείριση έργου - project management, Burke Rory”eudoxus link\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Mathematical Programming",
          "url": "/site-gem/en/courses/mathematical-programming/",
          "excerpt": "Bibliography:\n\n  “Ferguson S.T., Linear Programming: A Concise Introduction, University of California (UCLA)\n  (http://www.math.ucla.edu/~tom/LP.pdf)”\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to Information Systems",
          "url": "/site-gem/en/courses/mis/",
          "excerpt": "bibliography: “Κιουντούζης, Ε. (2009) Μεθοδολογίες Ανάλυσης και Σχεδιασμού Πληροφοριακών Συστημάτων, Εκδόσεις Μπένου (3η Έκδοση), Αθήνα.” “Avison, D., Fitzgerald, G. (2007)...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Multimedia",
          "url": "/site-gem/en/courses/mm/",
          "excerpt": "bibliography: Τεχνολογία πολυμέσων, Δημητριάδης Σταύρος Ν., Πομπόρτσης Ανδρέας Σ., Τριανταφύλλου Ευάγγελος Γ., Εκδόσεις ΤΖΙΟΛΑ, ISBN 978-960-418-025-7, 2004 Πολυμέσα Θεωρία και...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Networks I",
          "url": "/site-gem/en/courses/networks1/",
          "excerpt": "bibliography: ““Δίκτυα Επικοινωνιών, ένα πρώτο μάθημα”, Jean Walrand, Μετάφραση-Επιμέλεια: Ιωάννης Σταυρακάκης, Λάζαρος Μεράκος, Εκδόσεις ΕΙΔΙΚΟΣ ΛΟΓΑΡΙΑΣΜΟΣ ΚΟΝΔΥΛΙΩΝ ΕΡΕΥΝΑΣ – ΕΚΠΑ,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Networks II",
          "url": "/site-gem/en/courses/networks2/",
          "excerpt": "bibliography: ““ΔΙΚΤΥΑ ΥΠΟΛΟΓΙΣΤΩΝ: ΜΙΑ ΠΡΟΣΕΓΓΙΣΗ ΑΠΟ ΤΗ ΣΚΟΠΙΑ ΤΩΝ ΣΥΣΤΗΜΑΤΩΝ”, LARRY L. PETERSON, BRUCE S. DAVIE, Εκδόσεις Κλειδάριθμος, ISBN 978-960-461-266-6,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Object Oriented Programming",
          "url": "/site-gem/en/courses/oop/",
          "excerpt": "bibliography: ““Java προγραμματισμός”, 10η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Χ. ΓΚΙΟΥΡΔΑ ΣΙΑ ΕΕ, ISBN 978-960-512-6810, 2015 (in greek)” ““Java...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Operating Systems",
          "url": "/site-gem/en/courses/os/",
          "excerpt": "bibliography:\n\n  ““Λειτουργικά Συστήματα Αρχές Σχεδίασης”, William Stallings, 8η Έκδοση, Εκδόσεις Τζιόλα”\n  ““ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ ΣΕ UNIX”,MARC J. ROCHKIND, ΕΚΔΟΣΕΙΣ ΚΛΕΙΔΑΡΙΘΜΟΣ”\n\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Parallel Programming",
          "url": "/site-gem/en/courses/parallel-programming/",
          "excerpt": "bibliography: “Peter S. Pacheco, An Introduction to Parallel Programming, Morgan Kaufmann, 2011.” “Γραμματή Πάντζιου, Βασίλειος Μάμαλης, Αλέξανδρος Τομαράς , Εισαγωγή...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Patern Recognition",
          "url": "/site-gem/en/courses/pattern-recognition/",
          "excerpt": "bibliography: “Pattern Classification, R. O. Duda, P.E. Hart and D.G. Stork, Wiley, 2001.” “Pattern Recognition, S. Theodoridis and K. Koutroumbas,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Introduction to Quantum and DNA Computing",
          "url": "/site-gem/en/courses/quantum-dna-computing/",
          "excerpt": "Bibliography: “ΚΒΑΝΤΙΚΟΙ ΥΠΟΛΟΓΙΣΤΕΣ: ΒΑΣΙΚΕΣ ΕΝΝΟΙΕΣ”, Ιωάννης Καραφυλλίδης, Εκδόσεις ΚΛΕΙΔΑΡΙΘΜΟΣ, ISBN 978-960-209-816-5, 2005.” “Το νέο κβαντικό σύμπαν”, T.HEY, P.WALTERS, Εκδόσεις ΑΛ....",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Computer security and data protection",
          "url": "/site-gem/en/courses/security/",
          "excerpt": "bibliography: -“Gollmann, D. (2011). Computer Security, 3rd Edition. Wiley, New York.” -“Anderson, R. (2008). Security engineering – A guide to...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Semantic and Social Web",
          "url": "/site-gem/en/courses/semantic-and-social-web/",
          "excerpt": "Bibliography: “ΕΙΣΑΓΩΓΗ ΣΤΟ ΣΗΜΑΣΙΟΛΟΓΙΚΟ ΙΣΤΟ, GRIGORIS ANTONIOU, FRANK VAN HARMELEN”eudoxus link “Εξόρυξη γνώσης από βάσεις δεδομένων και τον παγκόσμιο ιστό,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Simulation and Modelling",
          "url": "/site-gem/en/courses/simulation-modeling/",
          "excerpt": "bibliography: ““Προσομοίωση διακριτών συστημάτων”, Khoshnevis Behrokh, Εκδόσεις Δίαυλος, ISBN 978-960-531-031-8, 1999” ““Προσομοίωση δικτύων υπολογιστών”, Πομπόρτσης Ανδρέας Σ., Τσουλφάς Ανέστης Γ.,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Social and Legal Issues of ICTs",
          "url": "/site-gem/en/courses/social-and-legal-issues-of-icts/",
          "excerpt": "Bibliography:\n\n  “Το δίκαιο του διαδικτύου (internet), Σιδηρόπουλος Θεόδωρος”eudoxus link\n  “Το δίκαιο του ηλεκτρονικού εμπορίου, Αλεξανδρίδου Ελίζα Δ.”eudoxus link\n\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Software Engineering",
          "url": "/site-gem/en/courses/software-engineering/",
          "excerpt": "bibliography: ““Ο ΠΡΑΚΤΙΚΟΣ ΠΡΟΓΡΑΜΜΑΤΙΣΤΗΣ”, ANDREW HUNT, DAVID THOMAS, Εκδόσεις Κλειδάριθμος, ISBN 978-960-461-135-5, 2008” ““ΑΝΑΓΝΩΣΗ ΚΩΔΙΚΑ”, ΔΙΟΜΗΔΗΣ ΣΠΙΝΕΛΛΗΣ, Εκδόσεις Κλειδάριθμος, ISBN...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Special Topics in Systems Security",
          "url": "/site-gem/en/courses/specific-information-security-issues/",
          "excerpt": "Βιβλιογραφία: ” ΒΑΣΙΚΕΣ ΑΡΧΕΣ ΑΣΦΑΛΕΙΑΣ ΔΙΚΤΥΩΝ: ΕΦΑΡΜΟΓΕΣ ΚΑΙ ΠΡΟΤΥΠΑ”, WILLIAM STALLINGS eudoxos link ” Ασφάλεια Πληροφοριακών Συστημάτων”, Σωκτ. Κάτσικας -...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Speech Processing",
          "url": "/site-gem/en/courses/speech-processing/",
          "excerpt": "Bibliography:\n\n  “Ψηφιακή επεξεργασία σήματος, Antoniou A.”eudoxus link\n  “Ψηφιακή Επεξεργασία Φωνής: Θεωρία και Εφαρμογές, Rabiner L.”eudoxus link\n\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Statistics",
          "url": "/site-gem/en/courses/statistics/",
          "excerpt": "bibliography: “Περιγραφική και διερευνητική στατιστική ανάλυση δεδομένων”, Γεωργιακώδης Φώτης A.,Τσίμπος Κλέων Χ., Εκδόσεις Σταμούλη, ISBN 978-960-351-315-6, 2000” “Πιθανότητες, τυχαίες μεταβλητές...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Strategic Management of Information Systems",
          "url": "/site-gem/en/courses/strategic-management-of-information-systems/",
          "excerpt": "Bibliography: “ΠΛΗΡΟΦΟΡΙΑΚΑ ΣΥΣΤΗΜΑΤΑ ΔΙΟΙΚΗΣΗΣ, KENNETH C. LAUDON, JANE P. LAUDON”eudoxus link “ΚΑΙΝΟΤΟΜΙΑ, ΣΤΡΑΤΗΓΙΚΗ, ΑΝΑΠΤΥΞΗ ΚΑ ΠΛΗΡΟΦΟΡΙΑΚΑ ΣΥΣΤΗΜΑΤΑ, Γεώργιος Δουκίδης”eudoxus link...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Theory of Probability",
          "url": "/site-gem/en/courses/theory-of-probability/",
          "excerpt": "bibliography: “ΕΙΣΑΓΩΓΗ ΣΤΗ ΘΕΩΡΙΑ ΠΙΘΑΝΟΤΗΤΩΝ”, HOEL P., PORT S., STONE C., Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ ΕΚΔΟΣΕΙΣ ΚΡΗΤΗΣ, ISBN 978-960-524-156-8, 2009” “Πιθανότητες, τυχαίες...",
          "teaser":
            
              null
            
        },
      
    
  
    
      
      
      
        
        {
          "title": "Posts by Category",
          "url": "/site-gem/categories/",
          "excerpt": "conference Διοργάνωση συνεδρίου του έργου ADRIATinn Το Τμήμα Πληροφορικής του Ιονίου Πανεπιστημίου ανακοινώνει τη διοργάνωση συνεδρίου του έργου ADRIATinn, στο...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Undergraduate Courses",
          "url": "/site-gem/en/courses/",
          "excerpt": "Approximately 100 students enter the Department of Informatics every year after taking the Panhellenic Admission Examinations. Also, 10% of the...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Faculty",
          "url": "/site-gem/en/faculty/",
          "excerpt": "Professors Vassilis Chrissikopoulos IT – Networks – Information Security Panagiotis Vlamos Mathematics in Application Modelling Assοciate Professors Dimitrios Tsoumakos Data...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Groups",
          "url": "/site-gem/en/groups/",
          "excerpt": "Bioinformatics and Human Electrophysiology Lab (BiHELab) The Bioinformatics and Human Electrophysiology Lab focus on recent advances in geriatrics and neurodegeneration,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Department of Informatics",
          "url": "/site-gem/en/home/",
          "excerpt": "Super Customizable Everything from the menus, sidebars, comments, and more can be configured or set with YAML Front Matter. Learn...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Index",
          "url": "/site-gem/en/index/",
          "excerpt": "",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "MSc Courses",
          "url": "/site-gem/en/msc-courses/",
          "excerpt": "Administrative Information Systems A. Exploitation of Information Technology by Organizations: Importance of Information Technology in Modern Organizations. Strategic Planning IT...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Pages",
          "url": "/site-gem/en/pages/",
          "excerpt": "&lt;h2 id=\"courses\" class=\"archive__subtitle\"&gt;courses&lt;/h2&gt; &lt;h2 id=\"courses-en\" class=\"archive__subtitle\"&gt;courses-en&lt;/h2&gt; Artificial Inteligence Aim and scope of AI. Historical data. Problem Solving. Search. Blind and...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "News",
          "url": "/site-gem/en/posts/",
          "excerpt": "2017 Special Issue in Computational Aspects Related to Unconventional, Bioinspired and Quantum Methods The following special issue, of which we...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Projects",
          "url": "/site-gem/en/projects/",
          "excerpt": "Cultural Understanding through Learning and Technology (CULT) Project CULT aims to create a cooperation platform between schools that reside in...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Search",
          "url": "/site-gem/en/search/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Faculty Research Interests",
          "url": "/site-gem/en/tags/",
          "excerpt": "Risk Perceptions and User Awareness XPath) e-Government and Information Systems Applied stochastic processes Markos Avlonitis Applied Stohastic Models Autonomic Networks...",
          "teaser":
            
              null
            
        },
      
    
  
    
  
    
      
      
      
        
        {
          "title": "Theodore Andronikos",
          "url": "/site-gem/en/faculty/andronikos/",
          "excerpt": "education: “Diploma in Computer Engineering, School of Electrical and Computer Engineering, National technical University of Athens” “Ph.D. in “Automatic Parallelization...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Aggeliki Tsohou",
          "url": "/site-gem/en/faculty/atsohou/",
          "excerpt": "education: “B.Sc. in Informatics, Department of Informatics, Athens University of Economics and Business, Greece” “M.Sc. in Information Systems, Department of...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Markos Avlonitis",
          "url": "/site-gem/en/faculty/avlonitis/",
          "excerpt": "education: “Degree in Physics, School of Sciences, Department of Physics, Aristotle University of Thessaloniki (AUT)” “M.Sc. in Physics of Materials,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Konstantinos Chorianopoulos",
          "url": "/site-gem/en/faculty/choko/",
          "excerpt": "Education: “Diploma in Electronic and Computer Engineering, Technical University of Crete” “MSc. Marketing and Communication, Athens University of Economics and...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Christos Anagnostopoulos",
          "url": "/site-gem/en/faculty/christos/",
          "excerpt": "education: “B.Sc., Informatics and Telecommunications, National and Kapodistrian University of Athens, 2001, Concentrations: Computational Systems and Applications” “M.Sc., Informatics and...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Dimitrios Tsoumakos",
          "url": "/site-gem/en/faculty/dtsouma/",
          "excerpt": "education: “Diploma in Electrical and Computer Engineering, School of Electrical and Computer Engineering, National Technical University of Athens, Greece. Title...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Emmanouil Magos",
          "url": "/site-gem/en/faculty/emagos/",
          "excerpt": "education: “Diploma in Computer Science, University of Piraeus” “Ph.D. in Secure Electronic Transaction systems over the Internet, Computer Science Department,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Phivos Mylonas",
          "url": "/site-gem/en/faculty/fmylonas/",
          "excerpt": "education: “Diploma in Electrical and Computer Engineering, School of Electrical and Computer Engineering, N.T.U.A., 2001” “Ph.D. in Engineering, School of...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Katia Lida Kermanidis",
          "url": "/site-gem/en/faculty/kerman/",
          "excerpt": "education: “Diploma from the Electrical and Computer Engineering Department, University of Patras” “PhD in Automatic Learning of Syntactic Dependencies And...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Michalis Stefanidakis",
          "url": "/site-gem/en/faculty/mistral/",
          "excerpt": "education: “Diploma of Computer Engineering and Informatics, University of Patras” “Ph.D. in Design and Performance Evaluation of Distributed Memory Parallel...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Konstantinos Oikonomou",
          "url": "/site-gem/en/faculty/okon/",
          "excerpt": "education: “Diploma in Computer Engineering and Informatics, University of Patras, Greece” “MSc in Communication and Signal Processing from the Electrical...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Adamantia Pateli",
          "url": "/site-gem/en/faculty/pateli/",
          "excerpt": "education: “Diploma in Informatics, Athens University of Economics and Business” “ΜSc in Electronic Commerce, University of Manchester Institute of Science...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Panagiotis Kourouthanassis",
          "url": "/site-gem/en/faculty/pkour/",
          "excerpt": "education: “BSc in Informatics, Athens University of Economics and Business” “MSc in Decision Sciences, Athens University of Economics and Business”...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Spyros Sioutas",
          "url": "/site-gem/en/faculty/sioutas/",
          "excerpt": "education: “Graduated of the Computer Engineering and Informatics department (University of Patras).Diploma Thesis: “A multimedia Information System for the city...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Vassilis Chrissikopoulos",
          "url": "/site-gem/en/faculty/vchris/",
          "excerpt": "education: “Diploma in Mathematics, Aristotle University of Thessaloniki” “MSc Industrial Research, Chelsea College, London University” “PhD Royal Holloway, London University”...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Panagiotis Vlamos",
          "url": "/site-gem/en/faculty/vlamos/",
          "excerpt": "education:\n\n  “Diploma in Mathematics, University of Athens”\n  “Ph.D. in Mathematics, Department of Mathematics, National Technical University of Athens”\n\n\n",
          "teaser":
            
              null
            
        },
      
    
  
    
  
    
  
    
      
      
      
        
        {
          "title": "Bioinformatics and Human Electrophysiology Lab (BiHELab)",
          "url": "/site-gem/en/groups/bihe/",
          "excerpt": "BiHELab interests lie within educational, research and development activities in the areas of neurogenerative diseases and their relations with mitochondrial...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Computational Modeling Lab (CMODLab)",
          "url": "/site-gem/en/groups/cmod/",
          "excerpt": "The fields of current research interest in the Laboratory of Computational Modeling in the Department of Informatics of the Ionian...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Humanistic and Social Informatics Lab (HILab)",
          "url": "/site-gem/en/groups/hi/",
          "excerpt": "On the other hand, it employs methodologies adapted from these scientific and artistic areas in order to supply ICT products...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Information Systems and Databases Laboratory (ISDLab)",
          "url": "/site-gem/en/groups/isd/",
          "excerpt": "The main focus of the Information Systems research actions is on: Management Information Systems (MIS) Strategic Decision Making Business Intelligence...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Networks, Multimedia and Security Systems Laboratory (NMSLab)",
          "url": "/site-gem/en/groups/nms/",
          "excerpt": "The education role of NMSLab is to support courses in computer networks, multimedia systems with respect to cultural applications, computer...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Quantum and UnconventIonal CompuTing Laboratory(QUITLab)",
          "url": "/site-gem/en/groups/quit/",
          "excerpt": "Our current areas of research include: Quantum Automata Automata on infinite inputs Modeling with Membrane automata SPARQL Queries and Finite...",
          "teaser":
            
              null
            
        },
      
    
  
    
  
    
      
      
      
        
        {
          "title": "Administrative Information Systems",
          "url": "/site-gem/en/msc/adm-inf-systems/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Artificial Intelligence",
          "url": "/site-gem/en/msc/ai/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Interaction Design",
          "url": "/site-gem/en/msc/id/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Research Methods",
          "url": "/site-gem/en/msc/rm/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
    
  
    
  
    
      
      
      
        
        {
          "title": "Alexandros Panaretos ",
          "url": "/site-gem/en/people/alex/",
          "excerpt": "education:\n\n  “BEng Software Engineering, Univerisity of Wales, Aberystwyth”\n  “MSc E-Commerce Technology, Essex University”\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Athanasios Alexiou",
          "url": "/site-gem/en/people/alexiou/",
          "excerpt": "education:\n\n  PhD in Bioinformatics, Ionian University\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Elena Laskari",
          "url": "/site-gem/en/people/elena/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Varvara Garneli",
          "url": "/site-gem/en/people/garneli/",
          "excerpt": "education: BSc in Informatics, Athens University of Economics and Business MSc in Informatics and Humanistic Studies, Ionian University PhD in...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Konstantinos Giannakis",
          "url": "/site-gem/en/people/giannakis/",
          "excerpt": "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in the...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Ioannis Karydis",
          "url": "/site-gem/en/people/karydis/",
          "excerpt": "education: “Phd , Auth, thesis: Mining and retrieval methods for acoustic and symbolic musical data.” “MSc Advanced Methods in Computer...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Patrick Mikalef",
          "url": "/site-gem/en/people/mikalef/",
          "excerpt": "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science in Business Informatics(MSc),Utrecht University PhD in IT Strategy,Ionian...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Ilias Pappas",
          "url": "/site-gem/en/people/pappas/",
          "excerpt": "education:\n\n  PhD in E-Commerce,Ionian University, Dept. of Informatics\n\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "George Paxinos",
          "url": "/site-gem/en/people/paxinos/",
          "excerpt": "education:\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Maria Psiha",
          "url": "/site-gem/en/people/psiha/",
          "excerpt": "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in Bioinformatics,Ionian...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Spiros Voulgaris",
          "url": "/site-gem/en/people/svoul/",
          "excerpt": "education: “Bachelor, Department of Electrical and Mechanical Engineering Computer, National Technical University of Athens” “Graduate, Department of Archives and Librarianship,...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Swtiria-Sofia Aroniada",
          "url": "/site-gem/en/people/swthria/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Bernd Wegner",
          "url": "/site-gem/en/people/wegner/",
          "excerpt": "education:\n",
          "teaser":
            
              null
            
        },
      
    
  
    
  
    
      
      
      
        
        {
          "title": "Special Issue in Computational Aspects Related to Unconventional, Bioinspired and Quantum Methods",
          "url": "/site-gem/en/posts/2017/01/31/quit-computational-aspects-journal/",
          "excerpt": "The following special issue, of which we are the guest editors will be published in “Computation” (ISSN 2079-3197, http://www.mdpi.com/journal/computation), and...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "5th workshop on Medical Physics and Biomedical Engineering",
          "url": "/site-gem/en/posts/2017/04/07/workshop5-medical-physics/",
          "excerpt": "The topics of the workshop include Hybrid Imaging and Personalized Medicine Radiation Protection in Medical Physics Innovation in Medical Physics...",
          "teaser":
            
              null
            
        },
      
    
  
    
  
    
      
      
      
        
        {
          "title": "Cultural Understanding through Learning and Technology (CULT)",
          "url": "/site-gem/en/projects/cult/",
          "excerpt": "CULT (MC-ERG-2008-230894) is a Marie Curie European Reintegration Grants (ERG) project funded by the European Commission (EC) under the 7th...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Discovery Space(D-Space)",
          "url": "/site-gem/en/projects/d-space/",
          "excerpt": "The D-Space project’s main objectives are: The demonstration and piloting of the D-Space service to the target users in real...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": null,
          "url": "/site-gem/en/projects/dakos/",
          "excerpt": "Dakos (Olive Fly) is the most severe enemy of olive production, causing each year important economic damage, in the form...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "ENCOURAGEMENT OF ENTERPRISING ACTION, INNOVATIVE APPLICATIONS AND COURSES OF CHOICE OF STUDENTS",
          "url": "/site-gem/en/projects/entrepreneurship/",
          "excerpt": "\n",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Platform for trans-Academic Cooperation in Innovation(PaCiNNo)",
          "url": "/site-gem/en/projects/paccino/",
          "excerpt": "The goal of PACiNNO is to establish a platform for cooperation in research and innovation covering the whole Adriatic region....",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "PromO(nto)tion",
          "url": "/site-gem/en/projects/promontotion/",
          "excerpt": "Archimedes III – National Strategic Reference Framework (NSRF) 2007-2013 Duration: 01/2012-12/2014 PromO(nto)tion proposes the development of a semantic thesaurus of...",
          "teaser":
            
              null
            
        },
      
        
        {
          "title": "Translation for Massive Open Online Courses(TraMOOC)",
          "url": "/site-gem/en/projects/tramooc/",
          "excerpt": "Duration: 01/02/2015 – 31/01/2018 Programme: Ηorizon 2020 Budget: 3,270,710.00€ Massive Open Online Courses have been growing rapidly in size and...",
          "teaser":
            
              null
            
        }
      
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
