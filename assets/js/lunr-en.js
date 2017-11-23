var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Τεχνητή Νοημοσύνη",
      excerpt: "Στόχοι της Τεχνητής Νοημοσύνης. Ιστορική Αναδρομή. Προβλήματα και επίλυση. Τεχνικές Αναζήτησης. Τυφλή και πληροφορημένη αναζήτηση. Αναζήτηση λύσης σε παιχνίδια δύο...",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Αλγόριθμοι",
      excerpt: "Η έννοια του αλγορίθμου και της πολυπλοκότητας. Βασικές έννοιες της ανάλυσης αλγορίθμων. Μαθηματικό υπόβαθρο. Τεχνικές επίλυσης αναδρομικών εξισώσεων. Τεχνικές σχεδίασης...",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Οργάνωση και Διοίκηση Επιχειρησέων",
      excerpt: "Οργανωσιακή Θεωρία, Τι είναι Οργανισμός, Διαστάσεις Οργανωσιακού Σχεδιασμού, Στρατηγική Επιχειρήσεων, Αντιστοίχιση σχεδιασμού-στόxων και στρατηγικής, Αποτελεσματικότητα έναντι Αποδοτικότητας, Τύποι Δομής Οργανισμών,...",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Διαχείριση Μεγάλου Όγκου Δεδομένων ",
      excerpt: "Στα πλαίσια αυτού του μαθήματος θα επικεντρωθούμε στην έννοια “μεγάλου όγκου δεδομένα” (big data) και θα μελετήσουμε μοντέρνες τεχνικές και...",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Μαθηματικός Λογισμός",
      excerpt: "Βασικά Σύνολα. Πραγματικοί Αριθμοί – Αξιώματα του R – Κλειστότητα του R. Μιγαδικοί Αριθμοί. Ευκλείδειοι χώροι. Ακολουθίες. Μονοτονία – Φράγματα,...",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Μεταγλωττιστές",
      excerpt: "Εισαγωγή στη μεταγλώττιση των προγραμμάτων. Γλώσσες γενικού σκοπού και ειδικές γλώσσες πεδίου (domain specific languages – DSLs). Λεκτική ανάλυση και...",
      categories: [],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Θεωρία Υπλογισμού",
      excerpt: "Αλφάβητα και γλώσσες. Πεπερασμένα αυτόματα. Ιδιότητες των πεπερασμένων αυτομάτων και των γλωσσών που δέχονται. Κανονικές εκφράσεις και κανονικές γλώσσες. Ισοδυναμία...",
      categories: [],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "Αρχιτεκτονική Υπολογιστών",
      excerpt: "Εισαγωγή στην αρχιτεκτονική υπολογιστών. Ψηφιακή Λογική: συνδυαστικά και ακολουθιακά λογικά κυκλώματα. Αρχιτεκτονικές συνόλου εντολών: τύποι εντολών, κύκλος μηχανής και εκτέλεση...",
      categories: [],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "Γραφικά με Υπολογιστές",
      excerpt: "Βασικές έννοιες γραφικών με υπολογιστές και εφαρμογές τους, Ιστορία και γενικά χαρακτηριστικά, Διανυσματική(ά) / Πλεγματική(ά) απεικόνιση/γραφικά, Εισαγωγικά στοιχεία σωλήνωσης, Βασικές...",
      categories: [],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "Προγραμματισμός Υπολογιστών",
      excerpt: "Τεχνικές για top-down, modular, και δομημένο σχεδιασμό για παραγωγή προγραμμάτων μεγάλου μεγέθους. Προχωρημένες δυναμικές δομές δεδομένων. Βασικές τεχνικές επεξεργασίας αρχείων...",
      categories: [],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "Διδακτική της Πληροφορικής",
      excerpt: "Σκοπός του μαθήματος είναι ο προβληματισμός και η απόκτηση γνώσεων: 1.για θέματα που αφορούν τις σπουδές στην πληροφορική, 2.για έννοιες...",
      categories: [],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Κρυπτογραφία",
      excerpt: "Κλασσικοί Αλγόριθμοι – Ασφάλεια και Κρυπτανάλυση. Μονοαλφαβητικοί Αλγόριθμοι Αντικατάστασης: Αλγόριθμος Ολίσθησης, Γενικευμένος Αλγόριθμος Αντικατάστασης, Αλγόριθμος Affine. Πολυαλφαβητικοί Αλγόριθμοι Αντικατάστασης: Αλγόριθμος...",
      categories: [],
      tags: [],
      id: 11
    });
    
  
    idx.add({
      title: "Κινητά και Κοινωνικά Μέσα",
      excerpt: "Συνεργατικός Υπολογισμός. Συστήματα CSCW (Computer-Supported Cooperative Work). Ταξινόμηση Χώρου-Χρόνου. Ανάπτυξη εφαρμογών. Εφαρμογές σε Μέσα Κοινωνικής Δικτύωσης. Κινητός Υπολογισμός. Κινητές Εφαρμογές....",
      categories: [],
      tags: [],
      id: 12
    });
    
  
    idx.add({
      title: "Αποθήκες Δεδομένων και Εξόρυξη Γνώσης",
      excerpt: "Αποθήκες Δεδομένων. Εισαγωγή στο πρόβλημα της Εξόρυξης Γνώσης. Μεθοδολογίες και Αλγόριθμοι. Εξόρυξη Δεδομένων. Προβλεπτική και περιγραφική εξόρυξη δεδομένων. Κανόνες συσχέτισης...",
      categories: [],
      tags: [],
      id: 13
    });
    
  
    idx.add({
      title: "Δομές Δεδομένων",
      excerpt: "Τύποι και δομές δεδομένων (ορισμοί, χρήσεις, διαχείριση, εφαρμογές). Στοίβα (stack), βασικές πράξεις, υλοποίηση στοίβας με πίνακα. Ουρά (queue), βασικές πράξεις,...",
      categories: [],
      tags: [],
      id: 14
    });
    
  
    idx.add({
      title: "Βάσεις Δεδομένων Ι",
      excerpt: "Εισαγωγή στα συστήματα διαχείρισης βάσεων δεδομένων. Φυσική αποθήκευση στο δίσκο. Μοντελοποίηση σχεσιακών βάσεων δεδομένων (μοντέλο Οντοτήτων-Συσχετίσεων – ER, σχεσιακό μοντέλο)....",
      categories: [],
      tags: [],
      id: 15
    });
    
  
    idx.add({
      title: "Βάσεις Δεδομένων ΙΙ",
      excerpt: "Προχωρημένα Θέματα SQL (PL SQL). Μοντελοποίηση αντικειμενοστρεφών και αντικειμενο-σχεσιακών βάσεων δεδομένων, μοντελοποίηση ημι-δομημένης πληροφορίας (η γλώσσα XML). Οργάνωση Αρχείων και...",
      categories: [],
      tags: [],
      id: 16
    });
    
  
    idx.add({
      title: "Ψηφιακή Επεξεργασία Εικόνας",
      excerpt: "Εισαγωγή στην Ψηφιακή Επεξεργασία Εικόνας. Αναπαράσταση Ψηφιακών Εικόνων. Στοιχεία ενός Συστήματος Ψηφιακής Επεξεργασίας Εικόνας. Ψηφιακή Καταγραφή Εικόνας. Τμηματοποίηση και Αυτόματη...",
      categories: [],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "Διακριτά Μαθηματικά",
      excerpt: "Εισαγωγή – αναδρομικά προβλήματα: ο πύργος του Hanoi, διαμέριση επιπέδου, το πρόβλημα του Flavious Josephus. Βασικές αρχές της συνδυαστικής ανάλυσης:...",
      categories: [],
      tags: [],
      id: 18
    });
    
  
    idx.add({
      title: "Κατανεμημένα Δικτυοκεντρικά Συστήματα",
      excerpt: "Τεχνολογίες RPC, JAVA RMI, CORBA. Προγραμματιστικά Νήματα (Threads), Συγχρονισμός (Synchronization). Κατανεμημένη επεξεργασία από την σκοπιά του λογισμικού συστημάτων. Middleware επικοινωνιών,...",
      categories: [],
      tags: [],
      id: 19
    });
    
  
    idx.add({
      title: "Συστήματα Υποστήριξης Αποφάσεων",
      excerpt: "Εισαγωγή στη θεωρία Αποφάσεων, Η φιλοσοφία των Συστημάτων Υποστήριξης Αποφάσεων και ο ρόλος τους στις διαδικασίες λήψης αποφάσεων στην επιχείρηση,...",
      categories: [],
      tags: [],
      id: 20
    });
    
  
    idx.add({
      title: "Ηλεκτρονική Διακυβέρνηση",
      excerpt: "Η δημόσια διοίκηση και το ηλεκτρονικό περιβάλλον, τα κύρια προβλήματα της δημόσιας διοίκησης στη κοινωνία της πληροφορίας, οι βασικές λειτουργίες...",
      categories: [],
      tags: [],
      id: 21
    });
    
  
    idx.add({
      title: "Ηλεκτρονικό Επιχειρείν",
      excerpt: "Εισαγωγή στην Ψηφιακή Οικονομία και το Ηλεκτρονικό Επιχειρείν. Βασικοί Ορισμοί. Ηλεκτρονικό Εμπόριο vs. Ηλεκτρονικό Επιχειρείν. Μοντέλα και Εφαρμογές Διεπιχειρησιακού (B2B)...",
      categories: [],
      tags: [],
      id: 22
    });
    
  
    idx.add({
      title: "Τεχνολογία Ψυχαγωγικού Λογισμικού & Εικονικοί Κόσμοι",
      excerpt: "Ιστορία και εξέλιξη του ψυχαγωγικού λογισμικού (βιντεοπαιχνιδιών). Η βιομηχανία ψυχαγωγικού λογισμικού σήμερα, τα είδη των παιχνιδιών, το προφίλ του χρήστη,...",
      categories: [],
      tags: [],
      id: 23
    });
    
  
    idx.add({
      title: "Καινοτομία και Επιχειρηματικότητα",
      excerpt: "Εισαγωγή στις έννοιες της Επιχειρηματικότητας και της Καινοτομίας. Eπιχειρηματικό περιβάλλον. Διαδικασία καινοτομίας και δημιουργικότητας. Μέθοδοι και εργαλεία μέτρησης καινοτομίας. Καινοτομία...",
      categories: [],
      tags: [],
      id: 24
    });
    
  
    idx.add({
      title: "Επικοινωνία Ανθρώπου-Υπολογιστή",
      excerpt: "Ανάγκες χρήστη στο σχεδιασμό των user-interfaces. Ανθρωποκεντρική αποτίμηση και στρατηγικές σχεδιασμού και δοκιμής των user interfaces, τεχνικές αλληλεπίδρασης. Σχεδίαση, προγραμματισμός...",
      categories: [],
      tags: [],
      id: 25
    });
    
  
    idx.add({
      title: "Πληροφορική στις Ανθρωπιστικές Επιστήμες",
      excerpt: "Κοινωνία της Πληροφορίας. Δεδομένα-Πληροφορία-Γνώση -Σοφία. Εισαγωγή στο Διαδίκτυο και τον Ιστό. Εικονικά περιβάλλοντα Πληροφόρησης. Εικονικά Περιβάλλοντα Μάθησης. Μάθηση από Απόσταση....",
      categories: [],
      tags: [],
      id: 26
    });
    
  
    idx.add({
      title: "Πολιτικές και Τεχνολογίες Ασφάλειας και Ιδιωτικότητας",
      excerpt: "Εννοιολογικό υπόβαθρο: ιδιωτικότητα, ψευδωνυμία, ανωνυμία, μη-συνδεσιμότητα, μη-ανιχνευσιμότητα και μη-παρατηρησιμότητα, ασφάλεια πληροφοριών, ευπάθειες, απειλές, επικινδυνότητα. Ιδιωτικότητα κατά το σχεδιασμό (privacy by...",
      categories: [],
      tags: [],
      id: 27
    });
    
  
    idx.add({
      title: "Ανάλυση και Σχεδιασμός Π.Σ.",
      excerpt: "Μοντέλα διεργασίας ανάπτυξης Π.Σ. Αναλυτική περιγραφή του κύκλου ζωής ενός Π.Σ. (καθορισμός προβλήματος, μελέτη σκοπιμότητας, ανάλυση απαιτήσεων, λογικός και φυσικός...",
      categories: [],
      tags: [],
      id: 28
    });
    
  
    idx.add({
      title: "Αναπαράσταση Πληροφοριών και Γνώσης",
      excerpt: "Κύκλος Διαχείρισης της Γνώσης, Συστήματα Διαχείρισης Γνώσης, Κύκλος Ανάπτυξης Συστημάτων Διαχείρισης Γνώσης, Αρχιτεκτονική και Τεχνικά Χαρακτηριστικά Συστημάτων Διαχείρισης Γνώσης, Απόκτηση...",
      categories: [],
      tags: [],
      id: 29
    });
    
  
    idx.add({
      title: "Ανάκτηση Πληροφορίας ",
      excerpt: "Μοντέλα Ανάκτησης Πληροφορίας. Αυτόματη Ευρετηρίαση και Αποθήκευση Πληροφορίας. Ανάκτηση Κειμένου. Τεχνικές και μέθοδοι αναπαράστασης κειμένων. Χρήση και βελτίωση αναπαραστάσεων κειμένων...",
      categories: [],
      tags: [],
      id: 30
    });
    
  
    idx.add({
      title: "Πληροφοριακά Συστήματα και Εφοδιαστική Αλυσίδα",
      excerpt: "Πληροφοριακά Συστήματα (Π.Σ.) επιχειρήσεων- νέες τεχνολογίες στο μάνατζμεντ (πληροφοριακά συστήματα & διαδίκτυο, τηλε-εργασία, εικονική επιχείρηση – συνεργασία). Επιχειρηματικές διεργασίες, ανασχεδίαση...",
      categories: [],
      tags: [],
      id: 31
    });
    
  
    idx.add({
      title: "Διοίκηση Ασφάλειας Πληροφοριακών Συστημάτων",
      excerpt: "Μοντελοποίηση του μηχανισμού παραγωγής ομιλίας: Μηχανισμός παραγωγής ομιλίας, Ήχοι ομιλίας. Ψηφιακή προεπεξεργασία κειμένου ομιλίας: Επιλογή της συχνότητας δειγματοληψίας, Ψηφιοποίηση, Βραχύχρονη...",
      categories: [],
      tags: [],
      id: 32
    });
    
  
    idx.add({
      title: "Θεωρία της Πληροφορίας",
      excerpt: "Εντροπία, σχετική εντροπία. Ο δεύτερος νόμος της θερμοδυναμικής. Ιδιότητα «ασυμπτωτικής ισοκατανομής». Εντροπία και στοχαστικές διαδικασίες. Συμπίεση δεδομένων. Βέλτιστοι Κώδικες, Κώδικας...",
      categories: [],
      tags: [],
      id: 33
    });
    
  
    idx.add({
      title: "Τεχνολογίες Διαδικτύου",
      excerpt: "Προγραμματισμός στον πελάτη (Client-side programming): HTML, HTML5 και JavaScript. Προγραμματισμός στον εξυπηρετητή (Server-side programming): Web Servers, δομή και λειτουργία. Η...",
      categories: [],
      tags: [],
      id: 34
    });
    
  
    idx.add({
      title: "Εισαγωγή στην Επιστήμη των Υπολογιστών",
      excerpt: "Η πληροφορική ως επιστήμη. Παρουσίαση της εξελικτικής πορείας της τεχνολογίας των υπολογιστών. Ο υπολογιστής ως επεξεργαστής δεδομένων. Το πρόγραμμα επεξεργασίας...",
      categories: [],
      tags: [],
      id: 35
    });
    
  
    idx.add({
      title: "Εισαγωγή στον Προγραμματισμό",
      excerpt: "Σύντομη εισαγωγή στην πληροφορική και στους υπολογιστές. Η έννοια του αλγόριθμου ως πεπερασμένη ακολουθία βημάτων για τη λύση προβλημάτων και...",
      categories: [],
      tags: [],
      id: 36
    });
    
  
    idx.add({
      title: " Γλωσσική Τεχνολογία",
      excerpt: "Υπολογιστική Γλωσσολογία και Επεξεργασία Φυσικής Γλώσσας. Τα χαρακτηριστικά της φυσικής γλώσσας. Μορφολογική επεξεργασία. Κανονικές Εκφράσεις. Αυτόματα και Μετατροπείς Πεπερασμένων Καταστάσεων....",
      categories: [],
      tags: [],
      id: 37
    });
    
  
    idx.add({
      title: "Γραμμική Άλγεβρα",
      excerpt: "Σύνολα. Καρτεσιανά γινόμενα. Σχέσεις. Πράξεις. Αλγεβρικές δομές. Πίνακες, πράξεις πινάκων, ανάστροφος πίνακας, αντίστροφος πίνακας. Ορίζουσες και ιδιότητες οριζουσών. Γραμμικά συστήματα....",
      categories: [],
      tags: [],
      id: 38
    });
    
  
    idx.add({
      title: "Λογικός Προγραμματισμός",
      excerpt: "Διαδικαστικός και δηλωτικός προγραμματισμός. Ο λογικός προγραμματισμός (logic programming) ως προγραμματισμός με βάση την Κατηγορηματική Λογική (predicate logic). Προτασιακή Λογική....",
      categories: [],
      tags: [],
      id: 39
    });
    
  
    idx.add({
      title: "Διαχείριση Έργων Πληροφορικής",
      excerpt: "Εισαγωγή, βασικές έννοιες και στόχοι της διαχείρισης έργων. Βασικά χαρακτηριστικά έργων ανάπτυξης Πληροφοριακών συστημάτων (ΠΣ). Ανάλυση του έργου σε δραστηριότητες,...",
      categories: [],
      tags: [],
      id: 40
    });
    
  
    idx.add({
      title: "Μαθηματικός Προγραμματισμός",
      excerpt: "Μοντελοποίηση προβλημάτων βελτιστοποίησης. Μορφοποίηση προβλημάτων σε προβλήματα γραμμικού προγραμματισμού. Γραφική επίλυση προβλημάτων γραμμικού προγραμματισμού. Η μέθοδος simplex – περιθώριες μεταβλητές,...",
      categories: [],
      tags: [],
      id: 41
    });
    
  
    idx.add({
      title: "Εισαγωγή στα Πληροφοριακά Συστήματα",
      excerpt: "Η έννοια του συστήματος. Νόμοι και αρχές της Γενικής Θεωρίας Συστημάτων (δομή, όρια, εντροπία, κ.ά.). Μεθοδολογίες Δύσκαμπτων κι Ευμετάβλητων Συστημάτων....",
      categories: [],
      tags: [],
      id: 42
    });
    
  
    idx.add({
      title: "Πολυμέσα",
      excerpt: "Υπερμέσα. Συμμετοχικά πολυμέσα. Εικονική πραγματικότητα. Αφήγηση. Διάδραση. Μορφές αναπαράστασης πληροφορίας σε συστήματα πολυμέσων. Η αρχιτεκτονική συστημάτων υπερμέσων. Ψυχαγωγικές και Εκπαιδευτικές...",
      categories: [],
      tags: [],
      id: 43
    });
    
  
    idx.add({
      title: "Δίκτυα I",
      excerpt: "Τηλεπικοινωνίες και Δίκτυα. Σήματα (αναλογικά-ψηφιακά), αρχές μετάδοσης δεδομένων, κωδικοποίηση δεδομένων. Μέσα μετάδοσης: Καλώδια συνεστραμμένου ζεύγους, ομοαξονικά καλώδια, οπτικές ίνες. Πρότυπα...",
      categories: [],
      tags: [],
      id: 44
    });
    
  
    idx.add({
      title: "Δίκτυα II",
      excerpt: "Σχεδιασμός και ανάπτυξη δικτύων υψηλών ταχυτήτων. Φυσικά Μέσα Μετάδοσης δικτύων υψηλών ταχυτήτων. Δίκτυα Frame Relay. Δίκτυα ΑΤΜ. Δίκτυα μεταγωγής Νοητού...",
      categories: [],
      tags: [],
      id: 45
    });
    
  
    idx.add({
      title: "Αντικειμενοστρεφής Προγραμματισμός",
      excerpt: "Εισαγωγή στην έννοια του αντικειμενοστρεφούς προγραμματισμού. Βασικές έννοιες Java – Μεταβλητές – Δεδομένα – Υπολογισμοί. Δομές διακλάδωσης, πίνακες. Κλάσεις, Αντικείμενα...",
      categories: [],
      tags: [],
      id: 46
    });
    
  
    idx.add({
      title: "Λειτουργικά Συστήματα",
      excerpt: "Βασικές έννοιες, Δομή ενός Λ.Σ. Διεργασίες: Μοντέλο και υλοποίηση διεργασιών, Διαδιεργασιακή επικοινωνία, Χρονοπρογραμματισμός διεργασιών. Συστήματα Διαχείρισης Μνήμης, Εναλλαγή, Κατάτμηση σε...",
      categories: [],
      tags: [],
      id: 47
    });
    
  
    idx.add({
      title: "Παράλληλος Προγραμματισμός",
      excerpt: "Δομικά στοιχεία ενός υπολογιστικού συστήματος: μια ανάλυση απόδοσης. Κρυφές μνήμες και ιεραρχίες μνημών. Παραλληλισμός σε επίπεδο εντολών και pipelining. Παράλληλος...",
      categories: [],
      tags: [],
      id: 48
    });
    
  
    idx.add({
      title: "Αναγνώριση Προτύπων",
      excerpt: "Μέθοδοι και συστήματα αναγνώρισης προτύπων. Όρια στην ακρίβεια μέτρησης της αξιοπιστίας αναγνώρισης. Κατευθυνόμενη εκπαίδευση και αυτοεκπαίδευση. Συναρτήσεις απόστασης. Ταξινόμηση με...",
      categories: [],
      tags: [],
      id: 49
    });
    
  
    idx.add({
      title: "Μοντέλα Κβαντικού και Μοριακού Υπολογισμού",
      excerpt: "Σύντομη εισαγωγή στα κλασικά υπολογιστικά μοντέλα με έμφαση στις μηχανές Turing. Εισαγωγή σε μη συμβατικά υπολογιστικά μοντέλα. Εισαγωγή στον μοριακό...",
      categories: [],
      tags: [],
      id: 50
    });
    
  
    idx.add({
      title: "Ασφάλεια υπολογιστών και προστασία δεδομένων",
      excerpt: "Εισαγωγή στην Ασφάλεια: Βασικοί ορισμοί, Μοντέλο Απειλών, Υπηρεσίες Ασφάλειας. Εισαγωγή στις έννοιες: Απειλή, Ευπάθεια, Κίνδυνος. Ασφάλεια Συστήματος – Έλεγχος Λογικής...",
      categories: [],
      tags: [],
      id: 51
    });
    
  
    idx.add({
      title: "Σημασιολογικός και Κοινωνικός Ιστός",
      excerpt: "Μοντέλα και δομές πληροφορίας με στόχο την αποδοτική διαχείριση δεδομένων του Παγκόσμιου Ιστού. Οργάνωση πληροφορίας στον Παγκόσμιο Ιστό: semantics, οντολογίες...",
      categories: [],
      tags: [],
      id: 52
    });
    
  
    idx.add({
      title: "Προσομοίωση και Μοντελοποίηση",
      excerpt: "Προσομοίωση και εξομοίωση. Δομή και κατασκευή μοντέλων προσομοίωσης. Παραγωγή τυχαίων αριθμών και τυχαίων μεταβλητών. Μηχανισμοί ροής χρόνου. Στοχαστικά μοντέλα αλληλεπιδραστικής...",
      categories: [],
      tags: [],
      id: 53
    });
    
  
    idx.add({
      title: "Κοινωνικά και Νομικά Θέματα των ΤΠΕ",
      excerpt: "Δικαιώματα και Υποχρεώσεις στην Κοινωνία της Πληροφορίας: Νομικό και κανονιστικό πλαίσιο, ηθικά και κοινωνιολογικά ζητήματα, θέματα κουλτούρας, δεοντολογία, ερευνητικές προεκτάσεις....",
      categories: [],
      tags: [],
      id: 54
    });
    
  
    idx.add({
      title: "Τεχνολογία Λογισμικού",
      excerpt: "Κύκλος ζωής λογισμικού. Μεθοδολογίες ανάπτυξης λογισμικού. Σχεδιασμός και αρχιτεκτονική συστήματος. Κατασκευή διεπαφής χρήστη. Διαδικασία παράδοσης και συντήρησης συστημάτων λογισμικού. Συνεργατικά...",
      categories: [],
      tags: [],
      id: 55
    });
    
  
    idx.add({
      title: "Ειδικά Θέματα Ασφάλειας Πληροφοριών",
      excerpt: "Ειδικά θέματα στην Ασφάλεια Συστήματος: Ασφάλεια Βάσεων Δεδομένων, Ψηφιακή Εγκληματολογία. Ειδικά Θέματα στην Ασφάλεια Δικτύων: Ασφάλεια Ασύρματων και Κινητών Δικτύων....",
      categories: [],
      tags: [],
      id: 56
    });
    
  
    idx.add({
      title: "Επεξεργασία Ομιλίας και Ήχου",
      excerpt: "Μοντελοποίηση του μηχανισμού παραγωγής ομιλίας: Μηχανισμός παραγωγής ομιλίας, Ήχοι ομιλίας. Ψηφιακή προεπεξεργασία κειμένου ομιλίας: Επιλογή της συχνότητας δειγματοληψίας, Ψηφιοποίηση, Βραχύχρονη...",
      categories: [],
      tags: [],
      id: 57
    });
    
  
    idx.add({
      title: "Στατιστική ",
      excerpt: "Θεωρία δειγματοληψίας, Τυχαία δείγματα, Τυχαίοι αριθμοί. Περιγραφή στατιστικών δεδομένων με πίνακες και γραφήματα, Πίνακας συχνοτήτων, Ραβδόγραμμα, Ιστόγραμμα. Στατιστικές εκτιμήσεις, Διαστήματα...",
      categories: [],
      tags: [],
      id: 58
    });
    
  
    idx.add({
      title: "Στρατηγική και Διοίκηση Πληροφοριακών Συστημάτων",
      excerpt: "Επιχειρηματική στρατηγική. Στρατηγικό management. Διαδικασία στρατηγικού σχεδιασμού. Ανάλυση εξωτερικού και εσωτερικού περιβάλλοντος. Η στρατηγική σημασία των Πληροφοριακών Συστημάτων (Π.Σ.). Μέθοδοι...",
      categories: [],
      tags: [],
      id: 59
    });
    
  
    idx.add({
      title: "Πιθανότητες",
      excerpt: "Έννοια πιθανότητας. Αξιωματικός και εμπειρικός ορισμός πιθανότητας. Χώροι πιθανότητας. Δεσμευμένη πιθανότητα και ανεξαρτησία. Συνδυαστική ανάλυση. Έννοια τυχαίας μεταβλητής. Μονοδιάστατες κατανομές....",
      categories: [],
      tags: [],
      id: 60
    });
    
  

  
  
    idx.add({
      title: "Artificial Inteligence",
      excerpt: "Aim and scope of AI. Historical data. Problem Solving. Search. Blind and informed Search. Adversarial Search. Propositional Logic. Predicate Logic....",
      categories: [],
      tags: [],
      id: 61
    });
    
  
    idx.add({
      title: "Algorithms",
      excerpt: "The notions of algorithm and complexity. Basic notions of algorithm analysis. Mathematical background. Techniques for solving recursive equations. Techniques for...",
      categories: [],
      tags: [],
      id: 62
    });
    
  
    idx.add({
      title: "Business Administration",
      excerpt: "Organization Theory, What is an organization, Dimensions of Organization Design, Organization Strategy, Fitting Design/ Goals to Strategy, Effectiveness vs. Efficiency,...",
      categories: [],
      tags: [],
      id: 63
    });
    
  
    idx.add({
      title: "Big Data Management Technologies ",
      excerpt: "This course focuses on the concept of “Big data” and studies modern techniques and storage platforms for their management at...",
      categories: [],
      tags: [],
      id: 64
    });
    
  
    idx.add({
      title: "Calculus",
      excerpt: "Basic Sets, Real Numbers – Axioms of Real numbers – Euclidean spaces, Sequences, Monotony, Subsequence, Convergence, Numerical Series, Convergence Criteria:...",
      categories: [],
      tags: [],
      id: 65
    });
    
  
    idx.add({
      title: "Compilers",
      excerpt: "Introduction to compilation of computer programs. General-purpose programming languages and domain specific languages (DSLs). Lexical analysis and token extraction from...",
      categories: [],
      tags: [],
      id: 66
    });
    
  
    idx.add({
      title: "Introduction to the Theory of Computation",
      excerpt: "Alphabets and languages. Finite automata. Properties of finite automata and their accepting languages. Regular expressions and regular languages. Equivalence of...",
      categories: [],
      tags: [],
      id: 67
    });
    
  
    idx.add({
      title: "Computer Architecture",
      excerpt: "Introduction to computer architecture. Digital logic, combinatorial and sequential logical circuits. Instruction set architectures. Instruction types, machine cycle and instruction...",
      categories: [],
      tags: [],
      id: 68
    });
    
  
    idx.add({
      title: "Computer Graphics",
      excerpt: "Basic concepts of computer graphics and applications, History, Vector / Raster graphics, Graphics pipeline, 2d Raster algorithms: line, circle, ellipse,...",
      categories: [],
      tags: [],
      id: 69
    });
    
  
    idx.add({
      title: "Computer Programming",
      excerpt: "Top-down techniques, modular, and structured engineering for the production of large programs. Advanced dynamic data structures, basic file processing techniques...",
      categories: [],
      tags: [],
      id: 70
    });
    
  
    idx.add({
      title: "Teaching Informatics",
      excerpt: "General aspects: Informatics in Education. ICT as a means of knowledge, research and learning in various scientific disciplines. Basic concepts...",
      categories: [],
      tags: [],
      id: 71
    });
    
  
    idx.add({
      title: "Cryptography",
      excerpt: "Cryptology and Cryptology. Classical ciphers; Security and Cryptanalysis. Monoalphabetical ciphers; Polyalphabetic ciphers. Absolute security; One-Time Pad; Computational security of encryption...",
      categories: [],
      tags: [],
      id: 72
    });
    
  
    idx.add({
      title: "Mobile and Social Media",
      excerpt: "Social Computing. Computer Supported Collaborative Work. Space-Time taxonomy. Social Media Apps. Mobile Computing. Mobile Apps.",
      categories: [],
      tags: [],
      id: 73
    });
    
  
    idx.add({
      title: "Data Mining and Data Warehousing",
      excerpt: "Data Warehouses. Introduction to Knowledge extraction. Methodologies and Algorithms. Data Mining. Predictive and Descriptive approaches to Data Mining. Association Rules....",
      categories: [],
      tags: [],
      id: 74
    });
    
  
    idx.add({
      title: "Data Structures",
      excerpt: "The basic target of this course is the study of fundamental data structures and algorithms. More specifically, this study contains...",
      categories: [],
      tags: [],
      id: 75
    });
    
  
    idx.add({
      title: "Databases I",
      excerpt: "Review of relational database systems. Physical issues in DBMSs. Storage media. ER Modeling and Design. EER Modeling and Design. Normalization...",
      categories: [],
      tags: [],
      id: 76
    });
    
  
    idx.add({
      title: "Databases II",
      excerpt: "Advanced SQL – PL SQL. Object-oriented and object-relational systems. File storage and Indexing (B-trees, B+ trees, Hashing, BitMap). Query processing...",
      categories: [],
      tags: [],
      id: 77
    });
    
  
    idx.add({
      title: "Digital Image Processing",
      excerpt: "Introduction to Digital Image Processing, Digital Image Representation, Digital Image Processing Systems, Digital Image Capture, Segmentation and Automatic Image Alignment,...",
      categories: [],
      tags: [],
      id: 78
    });
    
  
    idx.add({
      title: "Discrete Mathematics",
      excerpt: "Recursive problems: Hanoi Tower, plane partition, Flavious Josephus problem. Fundamental combinatorial analysis: basic principles, combinatorics formations. Calculus of Finite sums:...",
      categories: [],
      tags: [],
      id: 79
    });
    
  
    idx.add({
      title: "Distributed Network Systems",
      excerpt: "RPC, JAVA RMI, CORBA technologies. Threads, Synchronization. Distributed processing from the software perspective. Communications Middleware, remote procedure call, remote method...",
      categories: [],
      tags: [],
      id: 80
    });
    
  
    idx.add({
      title: "Decision Support Systems",
      excerpt: "Introduction to decision theory, Decision support systems and their role in the decision making processes of organizations, Decision support systems...",
      categories: [],
      tags: [],
      id: 81
    });
    
  
    idx.add({
      title: "Introduction to E-Government",
      excerpt: "E-Government models (B2B, G2G, C2G). Internal E-Government systems. external e-Government systems. Design and development principles of e-government services. Public operations...",
      categories: [],
      tags: [],
      id: 82
    });
    
  
    idx.add({
      title: "Entertainment Technology Software and Virtual Worlds",
      excerpt: "History and development of entertainment software (video games). The entertainment software industry today, types of games, user profile, available gaming...",
      categories: [],
      tags: [],
      id: 83
    });
    
  
    idx.add({
      title: "Innovation and Entrepreneurship",
      excerpt: "Introduction to the Entrepreneurship and Innovation concepts. Business Environment. Innovation and Creativity process. Innovation Assessment Methods and Tools. Innovation in...",
      categories: [],
      tags: [],
      id: 84
    });
    
  
    idx.add({
      title: "Human-Computer Interaction",
      excerpt: "User needs, human-centered design, and interaction design. Design and development of interactive prototypes. Methods and techniques for user evaluation.",
      categories: [],
      tags: [],
      id: 85
    });
    
  
    idx.add({
      title: "Computers and the Humanities",
      excerpt: "Information Society. Information Technology. Data-Information-Knowledge-Wisdom. The Internet. The World Wide Web. Virtual Information Environments. Virtual Learning Environments. E-Learning. E-Business. E-Commerce....",
      categories: [],
      tags: [],
      id: 86
    });
    
  
    idx.add({
      title: "Introduction to Computer Science",
      excerpt: "Introduction to Information Science. History of Computers. The von Neumann model of computer. Bits and bytes, binary numbers, text and...",
      categories: [],
      tags: [],
      id: 87
    });
    
  
    idx.add({
      title: "Information Privacy and Security Policies and Enhancing Technologies",
      excerpt: "Conceptual foundation: information privacy, anonymity, unlinkability, unobservability, information security, threats, vulnerabilities, risk. Privacy by Design. Information security risk assessment and...",
      categories: [],
      tags: [],
      id: 88
    });
    
  
    idx.add({
      title: "Analysis and Design of Information Systems",
      excerpt: "Software Engineering Methodologies and Models. Lifecycle of Information Systems. User Requirements Elicitation Methods and Tools. The critical role of analyst....",
      categories: [],
      tags: [],
      id: 89
    });
    
  
    idx.add({
      title: "Ιnformation and Κnowledge Representation",
      excerpt: "Knowledge Management Circle, Knowledge Management Systems, Knowledge Management Systems Development Cycle, Knowledge Management Systems Architecture and Specifications, Knowledge Management System...",
      categories: [],
      tags: [],
      id: 90
    });
    
  
    idx.add({
      title: "Information Retrieval",
      excerpt: "Information Retrieval Models, Automatic Indexing and Storage of Information, Text Retrieval and Representation, Text Compression, Text Clustering, Indexing, Relevance Feedback,...",
      categories: [],
      tags: [],
      id: 91
    });
    
  
    idx.add({
      title: "Information Systems and Supply Management",
      excerpt: "Introduction to supply chain management. Downstream and upstream supply chain operations. Strategies for ICT-based supply chain management. Introduction to ERPs....",
      categories: [],
      tags: [],
      id: 92
    });
    
  
    idx.add({
      title: "Information Systems Security Management",
      excerpt: "Conceptual foundation: assets, threats, vulnerabilities, risk, availability, integrity, confidentiality. Managing information security in the digital era. Information security governance frameworks...",
      categories: [],
      tags: [],
      id: 93
    });
    
  
    idx.add({
      title: "Introduction to the Theory of Computing",
      excerpt: "Entropy, relative entropy. The second law of thermodynamics. «Asymptotic equipartition» property. Entropy and stochastic processes. Data compression. Optimal codes, Huffman...",
      categories: [],
      tags: [],
      id: 94
    });
    
  
    idx.add({
      title: "Internet Technologies",
      excerpt: "Client side programming: HTML, HTML5 and JavaScript. Server-side programming: Web Servers, structure and operation. The PHP scripting language. Internet Databases:...",
      categories: [],
      tags: [],
      id: 95
    });
    
  
    idx.add({
      title: "Introduction to E-Government",
      excerpt: "E-Government models (B2B, G2G, C2G). Internal E-Government systems. external e-Government systems. Design and development principles of e-government services. Public operations...",
      categories: [],
      tags: [],
      id: 96
    });
    
  
    idx.add({
      title: "Introduction to Programming",
      excerpt: "Short introduction to Informatics and Computer Science. The notion of algorithm as a finite sequence of instructions for the solution...",
      categories: [],
      tags: [],
      id: 97
    });
    
  
    idx.add({
      title: "Linear Algebra",
      excerpt: "Cartesian products, Relations, Algebraic structures, Tables, Matrix operations, Reverse Matrix, Inverse Matrix. Determinants and their properties, Linear systems, Gauss method,...",
      categories: [],
      tags: [],
      id: 98
    });
    
  
    idx.add({
      title: "Logic Programming",
      excerpt: "Procedural and declarative programming differences. Programming according to predicate logic. Propositional logic. Entailment and proof methods in propositional logic. Axioms...",
      categories: [],
      tags: [],
      id: 99
    });
    
  
    idx.add({
      title: "Management of IT Projects ",
      excerpt: "Introduction to Project Management, Project Proposal Writing, Project Profiling, Project Phases and Organization, Understanding and Meeting Client Expectations, Working with...",
      categories: [],
      tags: [],
      id: 100
    });
    
  
    idx.add({
      title: "Mathematical Programming",
      excerpt: "Formulation of linear programming models: objective function, constraints, standard maximization and minimization problems. Feasibility, unboundness, multiple optimal solutions. Solution with...",
      categories: [],
      tags: [],
      id: 101
    });
    
  
    idx.add({
      title: "Introduction to Information Systems",
      excerpt: "The System concept. Principles of General Systems Theory. Soft and Hard Systems Methodologies. The Checkland Soft Systems Methodology (Rich Picture,...",
      categories: [],
      tags: [],
      id: 102
    });
    
  
    idx.add({
      title: "Multimedia",
      excerpt: "Hypermedia, participatory media, virtual reality, interactive narrative, interactivity. Multimedia system design. Entertainment and Educational Multimedia. Geographic Information Systems. Multimedia programming....",
      categories: [],
      tags: [],
      id: 103
    });
    
  
    idx.add({
      title: "Networks I",
      excerpt: "Telecommunications and Networks. Signals (analog-digital), data transmission principles, data encoding. Transmission media: twisted pair cables, coaxial cables, optical fibers. Wired...",
      categories: [],
      tags: [],
      id: 104
    });
    
  
    idx.add({
      title: "Networks II",
      excerpt: "Design and development of high-speed networks. Physical Transmission Media in high speed networks. Frame Relay Networks. ATM networks. Virtual circuit...",
      categories: [],
      tags: [],
      id: 105
    });
    
  
    idx.add({
      title: "Object Oriented Programming",
      excerpt: "Introduction to the notion of Object Oriented Programming. Basic notions of Java: variables, data, calculations. Branching structures, arrays. Classes, objects...",
      categories: [],
      tags: [],
      id: 106
    });
    
  
    idx.add({
      title: "Operating Systems",
      excerpt: "Basic notions of an Operating System (OS), OS structure. Processes: model and implementation. Interprocess communication, process scheduling. Memory Management, swapping,...",
      categories: [],
      tags: [],
      id: 107
    });
    
  
    idx.add({
      title: "Parallel Programming",
      excerpt: "Building blocks of a computer system: a performance study. Cache memories and memory hierarchies performance. Pipelining and other techniques of...",
      categories: [],
      tags: [],
      id: 108
    });
    
  
    idx.add({
      title: "Patern Recognition",
      excerpt: "Methods and pattern recognition systems, Limitation in accuracy of recognition reliability, Guided learning and self-learning, Distance Functions. Linear and non-linear...",
      categories: [],
      tags: [],
      id: 109
    });
    
  
    idx.add({
      title: "Introduction to Quantum and DNA Computing",
      excerpt: "A brief survey of the standard computational models such as Turing Machines. Introduction to non-conventional computing paradigms. DNA computing. Adleman’s...",
      categories: [],
      tags: [],
      id: 110
    });
    
  
    idx.add({
      title: "Computer security and data protection",
      excerpt: "Introduction to Computer and Information Security: Definitions, Threats, Vulnerabilities, Risks. Logical Access Control: User AUthentication (Passwords, Challenge-Response, One-time Passwords). Access...",
      categories: [],
      tags: [],
      id: 111
    });
    
  
    idx.add({
      title: "Semantic and Social Web",
      excerpt: "Data models for efficient processing and management of Web Big Data. Web Data and Semantics: ontologies and knowledge representation languages...",
      categories: [],
      tags: [],
      id: 112
    });
    
  
    idx.add({
      title: "Simulation and Modelling",
      excerpt: "Dynamical systems. Theoretical models and modeling strategies. Evolution in time and space. Scale effects and multi-scale modeling. Explicit models for...",
      categories: [],
      tags: [],
      id: 113
    });
    
  
    idx.add({
      title: "Social and Legal Issues of ICTs",
      excerpt: "Legal Aspects of Information Society Services. Anonymity and Privacy, Personal and Sensitive Data Protection. Electronic Commerce, e-Transactions and Consumer Protection....",
      categories: [],
      tags: [],
      id: 114
    });
    
  
    idx.add({
      title: "Software Engineering",
      excerpt: "Software lifecycle. Software development methods. System design and architecture. User Interface Software Technology. System Maintainance. Collaborative groupware. Entertainment Computing. Educational...",
      categories: [],
      tags: [],
      id: 115
    });
    
  
    idx.add({
      title: "Special Topics in Systems Security",
      excerpt: "Database security; computer forensics. Special topics in Network Security: Mobile and Wireless Network security. Special topics in Communications and Distributed...",
      categories: [],
      tags: [],
      id: 116
    });
    
  
    idx.add({
      title: "Speech Processing",
      excerpt: "Speech creation mechanism modeling: Speech creation mechanism, speech sounds. Digital speech preprocessing: Sampling rate, Digitisation, short term analysis, window size...",
      categories: [],
      tags: [],
      id: 117
    });
    
  
    idx.add({
      title: "Statistics",
      excerpt: "Sampling theory, Random samples, Random numbers. Description of statistical data with arrays and graphics, Frequency array, Histogram. Analysis of Variance....",
      categories: [],
      tags: [],
      id: 118
    });
    
  
    idx.add({
      title: "Strategic Management of Information Systems",
      excerpt: "Introduction to Strategic Management and Strategic Planning. Analysis of Internal and External Business Environment. Strategic Analysis Tools (SWOT, PESTEL, 5...",
      categories: [],
      tags: [],
      id: 119
    });
    
  
    idx.add({
      title: "Theory of Probability",
      excerpt: "The probability concept. Classical and empirical definition of probability. Conditional probability and independence. Bayes law. Combinatorial analysis. The concept of...",
      categories: [],
      tags: [],
      id: 120
    });
    
  

  
  
    idx.add({
      title: "Posts by Category",
      excerpt: "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n",
      categories: [],
      tags: [],
      id: 121
    });
    
  
    idx.add({
      title: "Undergraduate Courses",
      excerpt: "Approximately 100 students enter the Department of Informatics every year after taking the Panhellenic Admission Examinations. Also, 10% of the...",
      categories: [],
      tags: [],
      id: 122
    });
    
  
    idx.add({
      title: "Faculty",
      excerpt: "Professors Vassilis Chrissikopoulos IT – Networks – Information Security Panagiotis Vlamos Mathematics in Application Modelling Assοciate Professors Dimitrios Tsoumakos Data...",
      categories: [],
      tags: [],
      id: 123
    });
    
  
    idx.add({
      title: "Groups",
      excerpt: "Bioinformatics and Human Electrophysiology Lab (BiHELab) The Bioinformatics and Human Electrophysiology Lab focus on recent advances in geriatrics and neurodegeneration,...",
      categories: [],
      tags: [],
      id: 124
    });
    
  
    idx.add({
      title: "Department of Informatics",
      excerpt: "A flexible two-column Jekyll theme. Perfect for personal sites, blogs, and portfolios hosted on GitHub or your own server. Latest...",
      categories: [],
      tags: [],
      id: 125
    });
    
  
    idx.add({
      title: "Index",
      excerpt: "",
      categories: [],
      tags: [],
      id: 126
    });
    
  
    idx.add({
      title: "MSc Courses",
      excerpt: "Administrative Information Systems A. Exploitation of Information Technology by Organizations: Importance of Information Technology in Modern Organizations. Strategic Planning IT...",
      categories: [],
      tags: [],
      id: 127
    });
    
  
    idx.add({
      title: "Pages",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 128
    });
    
  
    idx.add({
      title: "News",
      excerpt: "2017 Special Issue in Computational Aspects Related to Unconventional, Bioinspired and Quantum Methods The following special issue, of which we...",
      categories: [],
      tags: [],
      id: 129
    });
    
  
    idx.add({
      title: "Projects",
      excerpt: "Cultural Understanding through Learning and Technology (CULT) Project CULT aims to create a cooperation platform between schools that reside in...",
      categories: [],
      tags: [],
      id: 130
    });
    
  
    idx.add({
      title: "Search",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 131
    });
    
  
    idx.add({
      title: "Faculty Research Interests",
      excerpt: "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n",
      categories: [],
      tags: [],
      id: 132
    });
    
  

  
  
    idx.add({
      title: "Θεόδωρος Ανδρόνικος",
      excerpt: "Διαδικτυακός Προγραμματισμός",
      categories: [],
      tags: ["Διαδικτυακός προγραμματισμός","Δυναμικοί αλγόριθμοι για παράλληλα & κατανεμημένα ετερογενή συστήματα","Αλγόριθμοι ερωταποκρίσεων για διαδικτυακά δεδομένα (XML, XPath)","Χρονικές (Temporal) λογικές για αυτόματη επαλήθευση και σύνθεση συστημάτων"],
      id: 133
    });
    
  
    idx.add({
      title: "Αγγελική Τσώχου",
      excerpt: "Ασφάλεια και Ιδιωτικότητα στο Διαδίκτυο",
      categories: [],
      tags: ["Πολιτικές Ασφάλειας, Αντιλήψεις Επικινδυνότητας και Ενημερότητα Χρηστών","Ανάλυση Επικινδυνότητας και Διοίκηση Ασφάλειας Πληροφοριών","Πολιτικές Ασφάλειας για την Ορθή Χρήση του Διαδικτύου","Ιδιωτικότητα και Εργαλεία Ενίσχυσης της Ιδιωτικότητας","Ιδιωτικότητα σε Δικτυακές Εφαρμογές Κινητών Συσκευών","Πρότυπα Ασφάλειας και Ιδιωτικότητας","Ηλεκτρονικές Υπηρεσίες, Ηλεκτρονική Διακυβέρνηση και Πληροφοριακά Συστήματα"],
      id: 134
    });
    
  
    idx.add({
      title: "Μάρκος Αυλωνίτης",
      excerpt: "Εφαρμοσμένα Στοχαστικά Μοντέλα",
      categories: [],
      tags: ["Εφαρμοσμένες στοχαστικές διεργασίες (επιστήμη υπολογιστών, μηχανική, περιβάλλον)","Συστήματα αυτοοργάνωσης","Εξάπλωση κακόβουλου λογισμικού","Μοντελοποίηση και προσομοίωση δικτύων μεγάλης κλίμακας"],
      id: 135
    });
    
  
    idx.add({
      title: "Κωνσταντίνος Χωριανόπουλος",
      excerpt: "Τεχνολογίες Λογισμικού",
      categories: [],
      tags: ["Κοινωνικά και Συνεργατικά Συστήματα"],
      id: 136
    });
    
  
    idx.add({
      title: "Χρήστος Αναγνωστόπουλος",
      excerpt: "Δικτυοκεντρικά Πληροφοριακά Συστήματα",
      categories: [],
      tags: ["Κινητός και Κατανεμημένος Υπολογισμός (Mobile and Distributed Computing)","Συστήματα Επίγνωσης Πληροφορίας και Διάχυτος Υπολογισμός (Context-aware and Pervasive Computing)","Ασύρματα Δίκτυα Αισθητήρων (Wireless Sensor Networks)","Δικτυοκεντρικά Πληροφοριακά Συστήματα (Network-centric Information Systems)"],
      id: 137
    });
    
  
    idx.add({
      title: "Δημήτριος Τσουμάκος",
      excerpt: "Διαχείριση Δεδομένων στον Παγκόσμιο Ιστό",
      categories: [],
      tags: ["Κατανεμημένη διαχείριση δεδομένων","Υπολογιστικά νέφη και διαχείριση δεδομένων","Βάσεις δεδομένων και αποθήκες δεδομένων στο διαδίκτυο"],
      id: 138
    });
    
  
    idx.add({
      title: "Εμμανουήλ Μάγκος",
      excerpt: "Κρυπτογραφία και Ασφάλεια Υπολογιστικών Συστημάτων",
      categories: [],
      tags: ["Κρυπτογραφικές Τεχνικές στην Ασφάλεια Υπολογιστών και Δικτύων","Ασφάλεια και Ιδιωτικότητα στο Διαδίκτυο","Ασφάλεια και Ιδιωτικότητα σε Κατανεμημένες Εφαρμογές"],
      id: 139
    });
    
  
    idx.add({
      title: "Φοίβος Μυλωνάς",
      excerpt: "Αναπαράσταση και Διαχείριση Γνώση",
      categories: [],
      tags: ["Υποβοηθούμενη από γνώση Ανάλυση Πολυμεσικού Περιεχομένου","Ανάκτηση Πολυμεσικής Πληροφορίας","Προσωποποίηση Πολυμεσικού Περιεχομένου","Προσαρμογή Πολυμεσικού Περιεχομένου στο χρήστη","Μοντελοποίηση χρηστών","Εξαγωγή προφίλ χρηστών","Αναπαράσταση και Ανάλυση οπτικού εννοιολογικού πλαισίου (visual context)","Αλληλεπίδραση ανθρώπου-υπολογιστή"],
      id: 140
    });
    
  
    idx.add({
      title: "Κάτια Λήδα Κερμανίδου",
      excerpt: "Τεχνητή Νοημοσύνη με έμφαση στη Γλωσσική Τεχνολογία",
      categories: [],
      tags: ["Μηχανική Μάθηση","Επεξεργασία Φυσικής Γλώσσας","Μοντελοποίηση Χρήστη","Εφαρμογές Πληροφορικής στις Ανθρωπιστικές και Κοινωνικές Επιστήμες"],
      id: 141
    });
    
  
    idx.add({
      title: "Μιχαήλ Στεφανιδάκης",
      excerpt: "Αρχιτεκτονική Υπολογιστικών Συστημάτων",
      categories: [],
      tags: ["Κατανεμημένες αρχιτεκτονικές υπολογιστικών συστημάτων υψηλών επιδόσεων -Ενσωματωμένα συστήματα πραγματικού χρόνου","Αρχιτεκτονικές συστημάτων αυξημένης υπολογιστικής παρουσίας  (pervasive computing systems)"],
      id: 142
    });
    
  
    idx.add({
      title: "Κωνσταντίνος Οικονόμου",
      excerpt: "Δίκτυα Υπολογιστών",
      categories: [],
      tags: ["Αυτόνομα Δίκτυα","Ανάλυση Απόδοσης Δικτύων","Πρόσβαση Μέσου"],
      id: 143
    });
    
  
    idx.add({
      title: "Αδαμαντία Πατέλη",
      excerpt: "Διοίκηση Πληροφοριακών Συστημάτων και Καινοτομίας",
      categories: [],
      tags: ["Διοίκηση Πληροφοριακών Συστημάτων","Επιχειρηματικά Μοντέλα","Ψηφιακή Επιχειρηματικότητα","Ανοικτή Καινοτομία","Crowdsourcing"],
      id: 144
    });
    
  
    idx.add({
      title: "Παναγιώτης Κουρουθανάσης",
      excerpt: "Πληροφοριακά Συστήματα και Ηλεκτρονική Διακυβέρνηση",
      categories: [],
      tags: ["Ηλεκτρονικό Επιχειρείν","Ηλεκτρονική Διακυβέρνηση","Πληροφοριακά Συστήματα"],
      id: 145
    });
    
  
    idx.add({
      title: "Σπύρος Σιούτας",
      excerpt: "Δομές και Βάσεις Δεδομένων",
      categories: [],
      tags: ["Δομές Δεδομένων και Αλγόριθμοι","Υπολογιστική Γεωμετρία και Χωρικές Βάσεις Δεδομένων","Χώρο-Χρονικές και Πολυμεσικές Βάσεις Δεδομένων","Κατανεμημένες Δομές Δεδομένων και P2P Συστήματα","Διαχείριση Μεγάλου Όγκου Δεδομένων σε Συστήματα Υπολογιστικού Νέφους (Cloud)","Αποθήκες Δεδομένων και Αλγόριθμοι Εξόρυξης Γνώσης","Χωρικές Δομές Δεδομένων και GIS"],
      id: 146
    });
    
  
    idx.add({
      title: "Βασίλειος Χρυσικόπουλος",
      excerpt: "Πληροφορική – Δίκτυα – Ασφάλεια Πληροφοριών",
      categories: [],
      tags: ["Ασφάλεια","Δίκτυα Η/Υ"],
      id: 147
    });
    
  
    idx.add({
      title: "Παναγιώτης Βλάμος ",
      excerpt: "Μαθηματικά με έμφαση στα Μοντέλα Εφαρμογών",
      categories: [],
      tags: ["Μαθηματικά μοντέλα με εφαρμογές σε προβλήματα τεχνικών αποκατάστασης εικόνας φυσικών επιστημών και χημικής μηχανικής","Μαθηματικά μοντέλα στην εκπαίδευση με χρήση νέων τεχνολογιών"],
      id: 148
    });
    
  

  
  
    idx.add({
      title: "Theodore Andronikos",
      excerpt: "Internet Programming",
      categories: [],
      tags: ["Internet Programming","Dynamic algorithms for parallel and distributed systems","Query languages for the web (XML, XPath)","Temporal logics for automated synthesis and verification of reactive systems"],
      id: 149
    });
    
  
    idx.add({
      title: "Aggeliki Tsohou",
      excerpt: "Internet Security and Privacy",
      categories: [],
      tags: ["Information Security Policies, Risk Perceptions and User Awareness","Information Security Risk Assessment and Management","Security Policies for Acceptable Internet Use","Privacy Enhancing Tools","Privacy Protection in Mobile Applications","Information Security and Privacy Standards","Theory Development and Research Methods in Information Systems","e-Services, e-Government and Information Systems"],
      id: 150
    });
    
  
    idx.add({
      title: "Markos Avlonitis",
      excerpt: "Applied Stohastic Models",
      categories: [],
      tags: ["Applied stochastic processes","Self-organized systems","Modeling the spread of computer malware","Modeling and simulation of large scale networks"],
      id: 151
    });
    
  
    idx.add({
      title: "Konstantinos Chorianopoulos",
      excerpt: "Software Technologies",
      categories: [],
      tags: ["Computer-Supported Collaborative Work"],
      id: 152
    });
    
  
    idx.add({
      title: "Christos Anagnostopoulos",
      excerpt: "Network-Centric Information Systems",
      categories: [],
      tags: ["Mobile and Distributed Computing","Context-aware and Pervasive Computing","Wireless Sensor Networks","Network-centric Information Systems"],
      id: 153
    });
    
  
    idx.add({
      title: "Dimitrios Tsoumakos",
      excerpt: "Data Management on the Web",
      categories: [],
      tags: ["Distributed Data Management","Data management in Cloud Computing","Internet Databases and DataWarehouses"],
      id: 154
    });
    
  
    idx.add({
      title: "Emmanouil Magos",
      excerpt: "Cryptography and Information Systems Security",
      categories: [],
      tags: ["Cryptographic techniques for computer and network security","Security and Privacy in Internet applications"],
      id: 155
    });
    
  
    idx.add({
      title: "Phivos Mylonas",
      excerpt: "Representation and Knowledge Management",
      categories: [],
      tags: ["Knowledge-assisted multimedia analysis","Multimedia information retrieval","Multimedia personalization","User adaptation","User modeling","User profiling","Visual context representation and analysis","Human-computer interaction"],
      id: 156
    });
    
  
    idx.add({
      title: "Katia Lida Kermanidis",
      excerpt: "Artificial Intelligence in Language Technology",
      categories: [],
      tags: ["Machine Learning","Natural Language Processing","User Modeling","Humanistic Informatics"],
      id: 157
    });
    
  
    idx.add({
      title: "Michalis Stefanidakis",
      excerpt: "Computer Systems Architecture",
      categories: [],
      tags: ["High-Performance Distributed Computer Systems","Real-time Embedded System Architectures","Pervasive Computing Systems"],
      id: 158
    });
    
  
    idx.add({
      title: "Konstantinos Oikonomou",
      excerpt: "Computer Networks",
      categories: [],
      tags: ["Autonomic Networks","Network Performance Analysis","Medium Access Control"],
      id: 159
    });
    
  
    idx.add({
      title: "Adamantia Pateli",
      excerpt: "Management of Information Systems and Innovation",
      categories: [],
      tags: ["Information Systems","E-Business & E-Governement","Mobile & Wireless Services","Strategic Management of ICT"],
      id: 160
    });
    
  
    idx.add({
      title: "Panagiotis Kourouthanassis",
      excerpt: "Information Systems and E-Goverment",
      categories: [],
      tags: ["Electronic Business","Electronic Government","Information Systems Management"],
      id: 161
    });
    
  
    idx.add({
      title: "Spyros Sioutas",
      excerpt: "Data Structures & Databases",
      categories: [],
      tags: ["Efficient I/O Algorithms & Data Structures","Computational Geometry and Computer Graphics","Spatio-Temporal and Multimedia Databases","Distributed Data Structures and Peer-to-Peer Computing","Parallel and Distributed Data Structures and Cloud Computing","Knowledge Data Discovery (KDD)","Data Mining Algorithms","Spatial Data Structures and Geographical Information Systems"],
      id: 162
    });
    
  
    idx.add({
      title: "Vassilis Chrissikopoulos",
      excerpt: "IT – Networks – Information Security",
      categories: [],
      tags: ["Security","Computer Networks"],
      id: 163
    });
    
  
    idx.add({
      title: "Panagiotis Vlamos",
      excerpt: "Mathematics in Application Modelling",
      categories: [],
      tags: ["Mathematical modeling applied for image restoration purposes","Mathematical modeling applied to physical and Chemical Engineering problems","Mathematical modeling in Education with the use of new technologies"],
      id: 164
    });
    
  

  
  
    idx.add({
      title: "Προπτυχιακά Μαθήματα",
      excerpt: "Για το ακαδημαϊκό έτος 2015 – 2016 εισήχθησαν στο Τμήμα Πληροφορικής 200 φοιτητές/τριες με το σύστημα των Πανελληνίων Εξετάσεων από...",
      categories: [],
      tags: [],
      id: 165
    });
    
  
    idx.add({
      title: "Προσωπικό",
      excerpt: "Καθηγητές Βασίλειος Χρυσικόπουλος Πληροφορική – Δίκτυα – Ασφάλεια Πληροφοριών Παναγιώτης Βλάμος Μαθηματικά με έμφαση στα Μοντέλα Εφαρμογών Αναπληρωτές Καθηγητές Δημήτριος...",
      categories: [],
      tags: [],
      id: 166
    });
    
  
    idx.add({
      title: "Εργαστήρια",
      excerpt: "Εργαστήριο Βιοπληροφορικής και Ανθρώπινης Ηλεκτροφυσιολογίας (BIHELab) Το εργαστήριο Βιοπληροφορικής και Ανθρώπινης Ηλεκτροφυσιολογίας καλύπτει τις ερευνητικές δραστηριότητες του Τμήματος Πληροφορικής του...",
      categories: [],
      tags: [],
      id: 167
    });
    
  
    idx.add({
      title: "Τμήμα Πληροφορικής",
      excerpt: "Η δράση του Τμήματος Πληροφορικής είναι προσανατολισμένη σε καινοτόμες εφαρμογές στις κατευθύνσεις των: Ανθρωπιστικών-Κοινωνικών Επιστημών  Πληροφοριακών Συστημάτων ",
      categories: [],
      tags: [],
      id: 168
    });
    
  
    idx.add({
      title: "Ανθρωπιστικές Επιστήμες",
      excerpt: "Γραφικά με Υπολογιστές Βασικές έννοιες γραφικών με υπολογιστές και εφαρμογές τους, Ιστορία και γενικά χαρακτηριστικά, Διανυσματική(ά) / Πλεγματική(ά) απεικόνιση/γραφικά, Εισαγωγικά......",
      categories: [],
      tags: [],
      id: 169
    });
    
  
    idx.add({
      title: "Index",
      excerpt: "",
      categories: [],
      tags: [],
      id: 170
    });
    
  
    idx.add({
      title: "Μαθήματα Μεταπτυχιακού",
      excerpt: "Διοικητική Πληροφοριακών Συστημάτων Α. Αξιοποίηση της πληροφορικής από τους οργανισμούς: Σημασία της πληροφορικής στους σύγχρονους οργανισμούς. Στρατηγικός Σχεδιασμός Π.Σ.. Πληροφοριακά...",
      categories: [],
      tags: [],
      id: 171
    });
    
  
    idx.add({
      title: "Pages",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 172
    });
    
  
    idx.add({
      title: "Ανακοινώσεις",
      excerpt: "2016 2ο Παγκόσμιο Συνέδριο GeNeDis 2016 Το 2ο Παγκόσμιο Συνέδριο για την Γενετική, Γηριατρική και την Έρευνα νευροεκφυλιστικών νόσων, το...",
      categories: [],
      tags: [],
      id: 173
    });
    
  
    idx.add({
      title: "Προγράμματα",
      excerpt: "Cultural Understanding through Learning and Technology (CULT) Το έργο CULT εστιάζει πάνω στην μελέτη των κοινωνικών επιδράσεων του συστήματος σε...",
      categories: [],
      tags: [],
      id: 174
    });
    
  
    idx.add({
      title: "Αναζήτηση στην ιστοσελίδα",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 175
    });
    
  
    idx.add({
      title: "Πληροφοριακών Συστημάτων",
      excerpt: "Συστήματα Υποστήριξης Αποφάσεων Εισαγωγή στη θεωρία Αποφάσεων, Η φιλοσοφία των Συστημάτων Υποστήριξης Αποφάσεων και ο ρόλος τους στις διαδικασίες λήψης...",
      categories: [],
      tags: [],
      id: 176
    });
    
  
    idx.add({
      title: "Ερευνητικά Ενδιαφέροντα του Τμήματος",
      excerpt: "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n",
      categories: [],
      tags: [],
      id: 177
    });
    
  

  
  
    idx.add({
      title: "Εργαστήριο Βιοπληροφορικής και Ανθρώπινης Ηλεκτροφυσιολογίας (BIHELab)",
      excerpt: "Το εργαστήριο Βιοπληροφορικής και Ανθρώπινης Ηλεκτροφυσιολογίας καλύπτει τις ερευνητικές δραστηριότητες του Τμήματος Πληροφορικής του Ιονίου Πανεπιστημίου, σχετικά με τις νευρολογικές...",
      categories: [],
      tags: [],
      id: 178
    });
    
  
    idx.add({
      title: "Εργαστήριο Υπολογιστικής Μοντελοποίησης (CMODLab)",
      excerpt: "Το Εργαστήριο Υπολογιστικής Μοντελοποίησης διεξάγει θεωρητική έρευνα και επιτελεί εφαρμοσμένη ερευνητική εργασία για την ανάπτυξη, υιοθέτηση και διαχείριση καινοτόμων εφαρμογών...",
      categories: [],
      tags: [],
      id: 179
    });
    
  
    idx.add({
      title: "Εργαστήριο Εφαρμογών Πληροφορικής στις Ανθρωπιστικές – Κοινωνικές Επιστήμες (HILab)",
      excerpt: "Η Πληροφορική στις Ανθρωπιστικές και Κοινωνικές Επιστήμες εστιάζει αφ’ ενός στην εφαρμογή των ΤΠΕ στην εξαγωγή, αναπαράσταση και επεξεργασία ανθρωπιστικών...",
      categories: [],
      tags: [],
      id: 180
    });
    
  
    idx.add({
      title: "Εργαστήριο Πληροφορικών Συστημάτων και Βάσεων Δεδομένων (ISDLab)",
      excerpt: "Το Εργαστήριο Πληροφορικών Συστημάτων και Βάσεων Δεδομένων (ISDLab) ιδρύθηκε τον Δεκέμβριο 2015, παρόλο που λειτουργούσε ήδη ατύπως από τον Σεπτέμβριο...",
      categories: [],
      tags: [],
      id: 181
    });
    
  
    idx.add({
      title: "Εργαστήριο Δικτύων, Πολυμέσων και Ασφάλειας Συστημάτων (NMSLab)",
      excerpt: "Το Εργαστήριο Δικτύων, Πολυμέσων και Ασφάλειας Συστημάτων (NMSLab) υποστηρίζει τις εκπαιδευτικές και ερευνητικές ανάγκες του Τμήματος Πληροφορικής, καθώς και άλλων...",
      categories: [],
      tags: [],
      id: 182
    });
    
  
    idx.add({
      title: "Εργαστήριο Κβαντικών και μή Συμβατικών Υπολογισμών(QUITLab)",
      excerpt: "",
      categories: [],
      tags: [],
      id: 183
    });
    
  

  
  
    idx.add({
      title: "Bioinformatics and Human Electrophysiology Lab (BiHELab)",
      excerpt: "The Bioinformatics and Human Electrophysiology Lab focus on recent advances in geriatrics and neurodegeneration, ranging from basic science to clinical...",
      categories: [],
      tags: [],
      id: 184
    });
    
  
    idx.add({
      title: "Computational Modeling Lab (CMODLab)",
      excerpt: "Apart from the educational focus, one of the main activities of the Department of Informatics of the Ionian University is...",
      categories: [],
      tags: [],
      id: 185
    });
    
  
    idx.add({
      title: "Humanistic and Social Informatics Lab (HILab)",
      excerpt: "Humanistic and Social Informatics Lab focuses on the one hand on the application of ICT to the extraction, representation and...",
      categories: [],
      tags: [],
      id: 186
    });
    
  
    idx.add({
      title: "Information Systems and Databases Laboratory (ISDLab)",
      excerpt: "The ISD-Lab of our department supports both educational and research needs of the Department of Informatics, as well as other...",
      categories: [],
      tags: [],
      id: 187
    });
    
  
    idx.add({
      title: "Networks, Multimedia and Security Systems Laboratory (NMSLab)",
      excerpt: "The Networks, Multimedia and Security Systems Laboratory (NMSLab) supports both educational and research needs of the Department of Informatics, as...",
      categories: [],
      tags: [],
      id: 188
    });
    
  
    idx.add({
      title: "Quantum and UnconventIonal CompuTing Laboratory(QUITLab)",
      excerpt: "",
      categories: [],
      tags: [],
      id: 189
    });
    
  

  
  
    idx.add({
      title: "Διοικητική Πληροφοριακών Συστημάτων",
      excerpt: "Α. Αξιοποίηση της πληροφορικής από τους οργανισμούς: Σημασία της πληροφορικής στους σύγχρονους οργανισμούς. Στρατηγικός Σχεδιασμός Π.Σ.. Πληροφοριακά συστήματα και διαχείριση...",
      categories: [],
      tags: [],
      id: 190
    });
    
  
    idx.add({
      title: "Τεχνητή Νοημοσύνη",
      excerpt: "Εισαγωγή στην τεχνητή Νοημοσύνη. Μηχανική Μάθηση. Δεδομένα. Επιβλεπόμενη Μάθηση. Κατηγοριοποίηση. Μάθηση Βασισμένη στα Παραδείγματα. Δέντρα Αποφάσεων. Στοχαστική Μάθηση. Naive Bayes....",
      categories: [],
      tags: [],
      id: 191
    });
    
  
    idx.add({
      title: "Σχεδίαση της Διάδρασης Ανθρώπου-Υπολογιστή",
      excerpt: "Ανάγκες χρήστη στο σχεδιασμό των user-interfaces. Ανθρωποκεντρική αποτίμηση και στρατηγικές σχεδιασμού και δοκιμής των user interfaces, τεχνικές αλληλεπίδρασης. Σχεδίαση, προγραμματισμός...",
      categories: [],
      tags: [],
      id: 192
    });
    
  
    idx.add({
      title: "Ερευνητικές Μέθοδοι",
      excerpt: "Επιλογή ερευνητικού σχεδίου. Επισκόπηση βιβλιογραφίας και διαμόρφωση ερευνητικών ερωτημάτων. Κατηγοριοποίηση μεθοδολογιών έρευνας. Μεθοδολογίες Ποσοτικής έρευνας: Συλλογή ποσοτικών δεδομένων – Διαμόρφωση...",
      categories: [],
      tags: [],
      id: 193
    });
    
  

  
  
    idx.add({
      title: "Administrative Information Systems",
      excerpt: "A. Exploitation of Information Technology by Organizations: Importance of Information Technology in Modern Organizations. Strategic Planning IT .. Information Systems...",
      categories: [],
      tags: [],
      id: 194
    });
    
  
    idx.add({
      title: "Artificial Intelligence",
      excerpt: "Introduction to AI. Machine Learning. Data. Supervised Learning. Classification. Example-based Learning. Decision trees. Statistical Learning. Unsupervised Learning. Clustering. Meta-learning. Evaluation....",
      categories: [],
      tags: [],
      id: 195
    });
    
  
    idx.add({
      title: "Interaction Design",
      excerpt: "User needs, human-centered design, and interaction design. Design and development of interactive prototypes. Methods and techniques for user evaluation.",
      categories: [],
      tags: [],
      id: 196
    });
    
  
    idx.add({
      title: "Research Methods",
      excerpt: "Research Design. Literature Review and Formulation of Research Questions. Categorisation of Research Methodologies. Quantitative Research Methodologies: Collection of Research Data...",
      categories: [],
      tags: [],
      id: 197
    });
    
  

  
  
    idx.add({
      title: "Αλέξανδρος Πανάρετος",
      excerpt: "education:\n\n  “BEng Software Engineering, Univerisity of Wales, Aberystwyth”\n  “MSc E-Commerce Technology, Essex University”\n\n\n",
      categories: [],
      tags: ["Διαδικτυακός προγραμματισμός","Βάσεις Δεδομένων","Συστήματα Διαχείρησης Περιεχομένου","Κοινωνικά & Συνεργατικά Δίκτυα"],
      id: 198
    });
    
  
    idx.add({
      title: "Αθανάσιος Αλεξίου",
      excerpt: "### education:\n - PhD in Bioinformatics, Ionian University \n",
      categories: [],
      tags: ["Bioinformatics"],
      id: 199
    });
    
  
    idx.add({
      title: "Έλενα Λάσκαρι",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 200
    });
    
  
    idx.add({
      title: "Βαρβάρα Γαρνέλη",
      excerpt: "education: BSc in Informatics, Athens University of Economics and Business MSc in Informatics and Humanistic Studies, Ionian University PhD in...",
      categories: [],
      tags: ["Computing Education"],
      id: 201
    });
    
  
    idx.add({
      title: "Κωνσταντίνος Γιαννάκης",
      excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in the...",
      categories: [],
      tags: ["Theoretical Computer Science"],
      id: 202
    });
    
  
    idx.add({
      title: "Ιωάννης Καρύδης",
      excerpt: "education: “Phd , Auth, thesis: Mining and retrieval methods for acoustic and symbolic musical data.” “MSc Advanced Methods in Computer...",
      categories: ["HILab"],
      tags: ["Συστήματα Υποστήριξης Αποφάσεων","Επεξεργασία Ομιλίας και Ήχου"],
      id: 203
    });
    
  
    idx.add({
      title: "Πάτρικ Μικάλεφ",
      excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science in Business Informatics(MSc),Utrecht University PhD in IT Strategy,Ionian...",
      categories: [],
      tags: ["IT Strategy"],
      id: 204
    });
    
  
    idx.add({
      title: "Ηλίας Παππάς",
      excerpt: "education:\n\n  PhD in E-Commerce,Ionian University, Dept. of Informatics\n\n",
      categories: [],
      tags: ["E-Commerce"],
      id: 205
    });
    
  
    idx.add({
      title: "Γεώργιος Παξινός",
      excerpt: "education:\n",
      categories: [],
      tags: ["Neuroscience"],
      id: 206
    });
    
  
    idx.add({
      title: "Μαρία Ψύχα",
      excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in Bioinformatics,Ionian...",
      categories: [],
      tags: ["Bioinformatics"],
      id: 207
    });
    
  
    idx.add({
      title: "Σπύρος Βούλγαρης",
      excerpt: "education:\n\n  “Πτυχίο, Τμήμα Ηλεκτρολόγων Μηχανικών και Μηχ. Η/Υ, Εθνικό Μετσόβιο Πολυτεχνείο”\n  “Μεταπτυχιακό, Τμήμα Αρχειονομίας και Βιβλιοθηκονομίας, Ιόνιο Παναεπιστήμιο”\n\n\n",
      categories: [],
      tags: [],
      id: 208
    });
    
  
    idx.add({
      title: "Σωτηρία-Σοφία Αρωνιάδα",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 209
    });
    
  
    idx.add({
      title: "Bernd Wegner",
      excerpt: "education:\n",
      categories: [],
      tags: ["Mathematics"],
      id: 210
    });
    
  

  
  
    idx.add({
      title: "Alexandros Panaretos ",
      excerpt: "education:\n\n  “BEng Software Engineering, Univerisity of Wales, Aberystwyth”\n  “MSc E-Commerce Technology, Essex University”\n\n",
      categories: [],
      tags: ["Internet programming","Databases","Content Management Systems","Social and Cooperative Networks"],
      id: 211
    });
    
  
    idx.add({
      title: "Athanasios Alexiou",
      excerpt: "education:\n\n  PhD in Bioinformatics, Ionian University\n\n",
      categories: [],
      tags: ["Bioinformatics"],
      id: 212
    });
    
  
    idx.add({
      title: "Elena Laskari",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 213
    });
    
  
    idx.add({
      title: "Varvara Garneli",
      excerpt: "education: BSc in Informatics, Athens University of Economics and Business MSc in Informatics and Humanistic Studies, Ionian University PhD in...",
      categories: [],
      tags: ["Computing Education"],
      id: 214
    });
    
  
    idx.add({
      title: "Konstantinos Giannakis",
      excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in the...",
      categories: [],
      tags: ["Theoretical Computer Science"],
      id: 215
    });
    
  
    idx.add({
      title: "Ioannis Karydis",
      excerpt: "education: “Phd , Auth, thesis: Mining and retrieval methods for acoustic and symbolic musical data.” “MSc Advanced Methods in Computer...",
      categories: ["HILab"],
      tags: ["Decision Support Systems","Speech and Audio Processing"],
      id: 216
    });
    
  
    idx.add({
      title: "Patrick Mikalef",
      excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science in Business Informatics(MSc),Utrecht University PhD in IT Strategy,Ionian...",
      categories: [],
      tags: ["IT Strategy"],
      id: 217
    });
    
  
    idx.add({
      title: "Ilias Pappas",
      excerpt: "education:\n\n  PhD in E-Commerce,Ionian University, Dept. of Informatics\n\n",
      categories: [],
      tags: ["E-Commerce"],
      id: 218
    });
    
  
    idx.add({
      title: "George Paxinos",
      excerpt: "education:\n",
      categories: [],
      tags: ["Neuroscience"],
      id: 219
    });
    
  
    idx.add({
      title: "Maria Psiha",
      excerpt: "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in Bioinformatics,Ionian...",
      categories: [],
      tags: ["Bioinformatics"],
      id: 220
    });
    
  
    idx.add({
      title: "Spiros Voulgaris",
      excerpt: "education: “Bachelor, Department of Electrical and Mechanical Engineering Computer, National Technical University of Athens” “Graduate, Department of Archives and Librarianship,...",
      categories: [],
      tags: [],
      id: 221
    });
    
  
    idx.add({
      title: "Swtiria-Sofia Aroniada",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 222
    });
    
  
    idx.add({
      title: "Bernd Wegner",
      excerpt: "education:\n",
      categories: [],
      tags: ["Mathematics"],
      id: 223
    });
    
  

  
  
    idx.add({
      title: "Εγγραφή Πρωτοετών Φοιτητών 2016-2017",
      excerpt: "Σας ενημερώνουμε ότι μετά την ολοκλήρωση της ηλεκτρονικής εγγραφής των επιτυχόντων στην εφαρμογή του Υπουργείου Παιδείας, Έρευνας και Θρησκευμάτων, εντός...",
      categories: ["secretary"],
      tags: [],
      id: 224
    });
    
  
    idx.add({
      title: "Διοργάνωση συνεδρίου του έργου ADRIATinn",
      excerpt: "Το Τμήμα Πληροφορικής του Ιονίου Πανεπιστημίου ανακοινώνει τη διοργάνωση συνεδρίου του έργου ADRIATinn, στο οποίο συμμετέχει στο πλαίσιο του Προγράμματος...",
      categories: ["conference"],
      tags: [],
      id: 225
    });
    
  
    idx.add({
      title: "Έναρξη Μαθημάτων Προπτυχιακού",
      excerpt: "Τα μαθήματα του Προπτυχιακού ξεκινούν την Δευτέρα 3 Οκτωβρίου 2016.",
      categories: ["secretary"],
      tags: [],
      id: 226
    });
    
  
    idx.add({
      title: "Clifford Kentros Guest Lecture",
      excerpt: "Ο Καθηγητής Ιατρικής, Clifford Kentros, που ηγείται ερευνητικής ομάδας των διάσημων Νομπελιστών May-Britt και Edvard Moser (2014), θα επισκεφτεί την...",
      categories: ["guest lecture"],
      tags: [],
      id: 227
    });
    
  
    idx.add({
      title: "2ο Παγκόσμιο Συνέδριο GeNeDis 2016",
      excerpt: "Το 2ο Παγκόσμιο Συνέδριο για την Γενετική, Γηριατρική και την Έρευνα νευροεκφυλιστικών νόσων, το 2nd World Congress 'GeNeDis 2016' με...",
      categories: [],
      tags: ["conference"],
      id: 228
    });
    
  

  
  
    idx.add({
      title: "Special Issue in Computational Aspects Related to Unconventional, Bioinspired and Quantum Methods",
      excerpt: "The following special issue, of which we are the guest editors will be published in 'Computation' (ISSN 2079-3197, http://www.mdpi.com/journal/computation), and...",
      categories: ["journal","QUIT"],
      tags: [],
      id: 229
    });
    
  
    idx.add({
      title: "5th workshop on Medical Physics and Biomedical Engineering",
      excerpt: "Department of Informatics, Ionian University alongside with the Institute for Medical Physics (IFMP) will host the 5th workshop on Medical...",
      categories: ["workshop"],
      tags: [],
      id: 230
    });
    
  

  
  
    idx.add({
      title: "Cultural Understanding through Learning and Technology (CULT)",
      excerpt: "Το έργο CULT εστιάζει πάνω στην μελέτη των κοινωνικών επιδράσεων του συστήματος σε μια κατακερματισμένη κοινότητα μαθητών δευτεροβάθμιας εκπαίδευσης. Τα...",
      categories: [],
      tags: [],
      id: 231
    });
    
  
    idx.add({
      title: "Discovery Space(D-Space)",
      excerpt: "Το έργο Discovery Space (D-Space) παρέχει τη δυνατότητα πρόσβασης και από κοινού χρήσης εργαλείων και εκπαιδευτικών πηγών όχι μόνο σε...",
      categories: [],
      tags: [],
      id: 232
    });
    
  
    idx.add({
      title: "Μοντελοποίηση της Δυναμικής Αυτοοργάνωσης και της Καταστολής του πληθυσμού του δάκου σε πραγματικό Οικο-Σύστημα του Δήμου Αγίου Γεωργίου, Κέρκυρας(Δάκος)",
      excerpt: "",
      categories: [],
      tags: [],
      id: 233
    });
    
  
    idx.add({
      title: "ΕΠΕΑΕΚ: ΕΝΘΑΡΡΥΝΣΗ ΕΠΙΧΕΙΡΗΜΑΤΙΚΩΝ ΔΡΑΣΕΩΝ, ΚΑΙΝΟΤΟΜΙΚΩΝ ΕΦΑΡΜΟΓΩΝ ΚΑΙ ΜΑΘΗΜΑΤΩΝ ΕΠΙΛΟΓΗΣ ΦΟΙΤΗΤΩΝ ΚΑΙ ΣΠΟΥΔΑΣΤΩΝ",
      excerpt: "Ανάπτυξη και εισαγωγή Μαθημάτων Επιχειρηματικότητας και Συνοδευτικών Δράσεων στο Ιόνιο Πανεπιστήμιο Αντικείμενο του συγκεκριμένου Έργου είναι να ενσωματωθούν στα προγράμματα...",
      categories: [],
      tags: [],
      id: 234
    });
    
  
    idx.add({
      title: "Πλατφόρμα για την δια-ακαδημαική συνεργασία στην καινοτομία(PaCiNNo)",
      excerpt: "Ο στόχος του έργου PACiNNO είναι η δημιουργία μιας πλατφόρμας για τη συνεργασία στον τομέα της έρευνας και της καινοτομίας...",
      categories: [],
      tags: [],
      id: 235
    });
    
  
    idx.add({
      title: "PromO(nto)tion",
      excerpt: "Η διαφήμιση αποτελεί σήμερα έναν από τους χώρους που χαρακτηρίζονται από την μεγαλύτερη διακίνηση χρημάτων. Με το παρόν ερευνητικό έργο...",
      categories: [],
      tags: [],
      id: 236
    });
    
  
    idx.add({
      title: "Μετάφραση για Μαζικά Ανοικτά Διαδικτυακά Μαθήματα(TraMOOC)",
      excerpt: "Ο στόχος του έργου είναι η υψηλής ποιότητας αυτόματη μετάφραση του περιεχομένου Μαζικών Ανοικτών Διαδικτυακών Μαθημάτων (Massive Open Online Courses),...",
      categories: [],
      tags: [],
      id: 237
    });
    
  

  
  
    idx.add({
      title: "Cultural Understanding through Learning and Technology (CULT)",
      excerpt: "Project CULT aims to create a cooperation platform between schools that reside in rural areas of Europe. For this purpose,...",
      categories: [],
      tags: [],
      id: 238
    });
    
  
    idx.add({
      title: "Discovery Space(D-Space)",
      excerpt: "",
      categories: [],
      tags: [],
      id: 239
    });
    
  
    idx.add({
      title: null,
      excerpt: "",
      categories: [],
      tags: null,
      id: 240
    });
    
  
    idx.add({
      title: "ENCOURAGEMENT OF ENTERPRISING ACTION, INNOVATIVE APPLICATIONS AND COURSES OF CHOICE OF STUDENTS",
      excerpt: "Developlment and Introduction of Courses of Entrepreneurship and Accompanying Actions in the Ionian University Project’s goal is to incorporate in...",
      categories: [],
      tags: [],
      id: 241
    });
    
  
    idx.add({
      title: "Platform for trans-Academic Cooperation in Innovation(PaCiNNo)",
      excerpt: "The goal of PACiNNO is to establish a platform for cooperation in research and innovation covering the whole Adriatic region....",
      categories: [],
      tags: [],
      id: 242
    });
    
  
    idx.add({
      title: "PromO(nto)tion",
      excerpt: "PromO(nto)tion proposes the development of a semantic thesaurus of concepts that are related to the content and other metadata of...",
      categories: [],
      tags: [],
      id: 243
    });
    
  
    idx.add({
      title: "Translation for Massive Open Online Courses(TraMOOC)",
      excerpt: "Massive Open Online Courses have been growing rapidly in size and impact. Yet the language barrier constitutes a major growth...",
      categories: [],
      tags: [],
      id: 244
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Τεχνητή Νοημοσύνη",
        "url": "/site-gem/gr/courses/ai/",
        "excerpt": "Βιβλιογραφία: ““ΤΕΧΝΗΤΗ ΝΟΗΜΟΣΥΝΗ: ΜΙΑ ΣΥΓΧΡΟΝΗ ΠΡΟΣΕΓΓΙΣΗ”, Russell S., Norvig P. ΕΚΔΟΣΕΙΣ ΚΛΕΙΔΑΡΙΘΜΟΣ ΕΠΕ, ISBN 960-209-873-2, 2005” eudoxus link ““Τεχνητή Nοημοσύνη”,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αλγόριθμοι",
        "url": "/site-gem/gr/courses/algorithms/",
        "excerpt": "Βιβλιογραφία: ““ΕΙΣΑΓΩΓΗ ΣΤΟΥΣ ΑΛΓΟΡΙΘΜΟΥΣ ΤΟΜΟΣ Ι”, CORMEN T.H., LEISERSON C.E., RIVEST R.L., STEIN C., Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ ΕΚΔΟΣΕΙΣ ΚΡΗΤΗΣ, ISBN 978-960-524-225-1,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Οργάνωση και Διοίκηση Επιχειρησέων",
        "url": "/site-gem/gr/courses/ba/",
        "excerpt": "Βιβλιογραφία:\n\n  ““ΟΡΓΑΝΩΣΙΑΚΗ ΘΕΩΡΙΑ ΚΑΙ ΣΧΕΔΙΑΣΜΟΣ”, RICHARD L. DAFT, Εκδόσεις Κλειδάριθμος, ISBN 960-209-846-5, 2005” eudoxus link\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Διαχείριση Μεγάλου Όγκου Δεδομένων ",
        "url": "/site-gem/gr/courses/big-data-management-technologies/",
        "excerpt": "Βιβλιογραφία: “Εξόρυξη από Μεγάλα Σύνολα Δεδομένων, Anand Rajaraman, Jeffrey David Ullman”eudoxus link ” Η ΜΕΘΟΔΟΣ PAGERANK ΤΗΣ GOOGLE ΚΑΙ ΑΛΛΑ...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μαθηματικός Λογισμός",
        "url": "/site-gem/gr/courses/calculus/",
        "excerpt": "Βιβλιογραφία: “Απειροστικός λογισμός, Παναγιωτόπουλος Αντώνιος Χ., Σαπουνάκης Αριστείδης, Εκδόσεις Σταμούλη, 1989” “Απειροστικός λογισμός, Παναγιωτόπουλος Αντώνιος Χ., Σαπουνάκης Αριστείδης, Εκδόσεις Σταμούλη,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μεταγλωττιστές",
        "url": "/site-gem/gr/courses/compilers/",
        "excerpt": "Βιβλιογραφία: ” Μεταγλωττιστές, Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman” eudoxus link ” Μεταγλωττιστές, Παπασπύρου Νικόλαος...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Θεωρία Υπλογισμού",
        "url": "/site-gem/gr/courses/computation-theory/",
        "excerpt": "Βιβλιογραφία: ““ΕΙΣΑΓΩΓΗ ΣΤΗ ΘΕΩΡΙΑ ΥΠΟΛΟΓΙΣΜΟΥ”, SIPSER MICHAEL, Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ ΕΚΔΟΣΕΙΣ ΚΡΗΤΗΣ, ISBN 978-960-524-243-5, 2009”eudoxus link ““Στοιχεία θεωρίας υπολογισμού”, Lewis Harry...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αρχιτεκτονική Υπολογιστών",
        "url": "/site-gem/gr/courses/computer-architecture/",
        "excerpt": "Βιβλιογραφία: “D.A.Patterson &amp; J.L.Hennessy, “Οργάνωση και Σχεδίαση Υπολογιστών (Τόμος Α’)” , 4η έκδοση, Κλειδάριθμος, 2010.” eudoxus link “W. Stallings, “Οργάνωση...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Γραφικά με Υπολογιστές",
        "url": "/site-gem/gr/courses/computer-graphics/",
        "excerpt": "Βιβλιογραφία: “Γραφικά και Οπτικοποίηση”, Θεοχάρης Θ., Πλατής Ν., Παπαϊωάννου Γ., Πατρικαλάκης Ν., Εκδόσεις Συμμετρία, ISBN 978-960-266-296-0, 2010”eudoxus link “Γραφικά με...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Προγραμματισμός Υπολογιστών",
        "url": "/site-gem/gr/courses/computer-programming/",
        "excerpt": "Βιβλιογραφία: “C Προγραμματισμός”, 6η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Α. Γκιούρδα &amp; ΣΙΑ ΟΕ, ISBN 978-960-512-5912, 2011”eudoxus link “ΜΑΘΕΤΕ...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Διδακτική της Πληροφορικής",
        "url": "/site-gem/gr/courses/computing-education/",
        "excerpt": "Βιβλιογραφία: “Εισαγωγή στη διδακτική της πληροφορικής, Βασίλης Ι. Κόμης, Εκδόσεις Κλειδάριθμος”eudoxus link “Εισαγωγή στη διδακτική της πληροφορικής, Ν. Αλεξανδρής, Β....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κρυπτογραφία",
        "url": "/site-gem/gr/courses/cryptography/",
        "excerpt": "Βιβλιογραφία: “Κρυπτογραφία και ασφάλεια δικτύων – αρχες και εφαρμογες. William Stallings, ΙΩΝ 2012.”eudoxus link “Σύγχρονη Κρυπτογραφία – Θεωρία και Εφαρμογές....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κινητά και Κοινωνικά Μέσα",
        "url": "/site-gem/gr/courses/cscw/",
        "excerpt": "Βιβλιογραφία: ““Επικοινωνία ανθρώπου – υπολογιστή, 3ή Έκδοση”, Dix Alan J., Finlay Janet E., Abowd Gregory D., Beale Russell, Εκδόσεις Α....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αποθήκες Δεδομένων και Εξόρυξη Γνώσης",
        "url": "/site-gem/gr/courses/data-mining-and-data-warehousing/",
        "excerpt": "Βιβλιογραφία: “Εισαγωγή στην εξόρυξη δεδομένων, Tan Pang - Ning,Steinbach Michael,Kumar Vipin” eudoxus link “Εισαγωγή στην Εξόρυξη Δεδομένων και τις Αποθήκες...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Δομές Δεδομένων",
        "url": "/site-gem/gr/courses/data-structures/",
        "excerpt": "Βιβλιογραφία: “Δομές δεδομένων, αλγόριθμοι και εφαρμογές C++”, Sahnii Sartaj, Εκδόσεις ΤΖΙΟΛΑ, ISBN 978-960-418-030-1, 2004”eudoxus link “ΔΟΜΕΣ ΔΕΔΟΜΕΝΩΝ”, ΓΕΩΡΓΑΚΟΠΟΥΛΟΣ Γ.Φ., Εκδόσεις...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Βάσεις Δεδομένων Ι",
        "url": "/site-gem/gr/courses/databases1/",
        "excerpt": "Βιβλιογραφία: ““Συστήματα Βάσεων Δεδομένων”, Silberschatz, Korth, Suda, Εκδόσεις Α. Γκιούρδα, ISBN 978-960-512-384-0, 2004” ““ΣΧΕΔΙΑΣΜΟΣ ΒΑΣΕΩΝ ΔΕΔΟΜΕΝΩΝ”, ΓΕΩΡΓΙΟΣ ΒΑΣΙΛΑΚΟΠΟΥΛΟΣ, Εκδόσεις Γ....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Βάσεις Δεδομένων ΙΙ",
        "url": "/site-gem/gr/courses/databases2/",
        "excerpt": "Βιβλιογραφία: ““Θεμελιώδεις αρχές συστημάτων βάσεων δεδομένων”, Elmasri Ramez,Navathe Shamkant B, Εκδόσεις Δίαυλος, ISBN 978-960-531-220-6, 2008” ““Συστήματα Βάσεων Δεδομένων”, Ιωάννης Μανωλόπουλος...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ψηφιακή Επεξεργασία Εικόνας",
        "url": "/site-gem/gr/courses/digit-image-process/",
        "excerpt": "Βιβλιογραφία: “ΨΗΦΙΑΚΗ ΕΠΕΞΕΡΓΑΣΙΑ ΕΙΚΟΝΑΣ”, ΙΩΑΝΝΗΣ ΠΗΤΑΣ, Εκδόσεις ΙΩΑΝΝΗΣ ΠΗΤΑΣ, 2010” “Ψηφιακή Επεξεργασία και Ανάλυση Εικόνας”, Παπαμάρκος Νικόλαος, Αυτοέκδοση, ISBN 978-960-92731-3-8,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Διακριτά Μαθηματικά",
        "url": "/site-gem/gr/courses/discrete-mathematics/",
        "excerpt": "Βιβλιογραφία: “Διακριτά μαθηματικά”, Παναγιωτόπουλος Αντώνιος Χ., Εκδόσεις Σταμούλη, ISBN 960-351-227-3, 1999eudoxus link “ΣΤΟΙΧΕΙΑ ΔΙΑΚΡΙΤΩΝ ΜΑΘΗΜΑΤΙΚΩΝ”, LIU C.L., Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ ΕΚΔΟΣΕΙΣ...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κατανεμημένα Δικτυοκεντρικά Συστήματα",
        "url": "/site-gem/gr/courses/distributed-network-systems/",
        "excerpt": "Βιβλιογραφία: ““ΚΑΤΑΝΕΜΗΜΕΝΑ ΣΥΣΤΗΜΑΤΑ: ΑΡΧΕΣ ΚΑΙ ΥΠΟΔΕΙΓΜΑΤΑ”, ANDREW S. TANENBAUM, MAARTEN VAN STEEN” eudoxus link ““ΚΑΤΑΝΕΜΗΜΕΝΑ ΣΥΣΤΗΜΑΤΑ ΜΕ JAVA”, Ι. Κ....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Συστήματα Υποστήριξης Αποφάσεων",
        "url": "/site-gem/gr/courses/dss/",
        "excerpt": "Βιβλιογραφία: “Συστήματα υποστήριξης αποφάσεων”, Ματσατσίνης Ν., Εκδόσεις Νέων Τεχνολογιών, 2010, ISBN 978-960-6759-44-4 eudoxus link “Διοικητική επιστήμη”, Πραστάκος Γρηγόρης Π., Εκδόσεις...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ηλεκτρονική Διακυβέρνηση",
        "url": "/site-gem/gr/courses/e-government/",
        "excerpt": "Βιβλιογραφία: “”Εισαγωγή στην ηλεκτρονική διακυβέρνηση” , Πομπόρτσης Ανδρέας, Εκδόσεις ΤΖΙΟΛΑ, ISBN 960-418-083-5, 2006” eudoxus link “”Ηλεκτρονική δημόσια διοίκηση” , Αποστολάκης...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ηλεκτρονικό Επιχειρείν",
        "url": "/site-gem/gr/courses/ecommerce/",
        "excerpt": "Βιβλιογραφία: “Ηλεκτρονικό εμπόριο 2008”, Turban E., King D., McKay J., Marshall P., Lee J., Viehland D., Volonino L., Cheung Ch.,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Τεχνολογία Ψυχαγωγικού Λογισμικού & Εικονικοί Κόσμοι",
        "url": "/site-gem/gr/courses/entertainment-technology-software-and-virtual-worlds/",
        "excerpt": "Βιβλιογραφία:\n\n  “ΒΙΝΤΕΟΠΑΙΧΝΙΔΙΑ: ΒΙΟΜΗΧΑΝΙΑ ΚΑΙ ΑΝΑΠΤΥΞΗ, ΚΩΣΤΑΣ ΑΝΑΓΝΩΣΤΟΥ”eudoxus link\n  “Εικονικά περιβάλλοντα πληροφόρησης, Κόκοτος Δημήτριος Χ.”eudoxus link\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Καινοτομία και Επιχειρηματικότητα",
        "url": "/site-gem/gr/courses/entrepreneurship-innovation/",
        "excerpt": "Βιβλιογραφία: “Η. Γ. Καραγιάννης, Ι. Λ. Μπακούρος, “Καινοτομία &amp; Επιχειρηματικότητα: Θεωρία – Πράξη”, Εκδόσεις Σοφία, 2010.” eudoxus link “Πιπερόπουλος Πάνος...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Επικοινωνία Ανθρώπου-Υπολογιστή",
        "url": "/site-gem/gr/courses/hci/",
        "excerpt": "Βιβλιογραφία: “Επικοινωνία ανθρώπου – υπολογιστή, 3ή Έκδοση, Dix Alan J., Finlay Janet E., Abowd Gregory D., Beale Russell, Εκδόσεις Α....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πληροφορική στις Ανθρωπιστικές Επιστήμες",
        "url": "/site-gem/gr/courses/humanistic-informatics/",
        "excerpt": "Βιβλιογραφία: “ΤΕΧΝΟΛΟΓΙΕΣ ΠΛΗΡΟΦΟΡΙΩΝ ΚΑΙ ΕΠΙΚΟΙΝΩΝΙΑΣ &amp; ΚΟΙΝΩΝΙΑ, Ιωάννης Σ. Κουμπούρος”eudoxus link “Υπηρεσίες προστιθέμενης αξίας στο διαδίκτυο, Μήλιου Αμαλία Ν.,Πομπόρτσης Ανδρέας...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πολιτικές και Τεχνολογίες Ασφάλειας και Ιδιωτικότητας",
        "url": "/site-gem/gr/courses/info-privacy-security-polices-enhancing-tech/",
        "excerpt": "Βιβλιογραφία: “Προστασία της Ιδιωτικότητας και Τεχνολογίες Πληροφορικής και Επικοινωνιών: Τεχνικά και Νομικά Θέματα, Λαμπρινουδάκης Κ., Μήτρου Λ., Γκρίτζαλης Σ. και...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ανάλυση και Σχεδιασμός Π.Σ.",
        "url": "/site-gem/gr/courses/info-systems-analysis-and-design/",
        "excerpt": "Βιβλιογραφία: “Alan Dennis. Barbara Haley Wixom, David Tegarden (2010) Ανάλυση &amp; Σχεδιασμός Συστημάτων με τη UML 2.0: Μια αντικειμενοστρεφής Προσέγγιση,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αναπαράσταση Πληροφοριών και Γνώσης",
        "url": "/site-gem/gr/courses/information-and-knowledge-representation/",
        "excerpt": "Βιβλιογραφία: “Εξόρυξη γνώσης από βάσεις δεδομένων και τον παγκόσμιο ιστό, Βαζιργιάννης Μιχάλης, Χαλκίδη Μαρία”eudoxus link “Εισαγωγή στην εξόρυξη δεδομένων, Tan...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ανάκτηση Πληροφορίας ",
        "url": "/site-gem/gr/courses/information-retrieval/",
        "excerpt": "Βιβλιογραφία: “ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΑΝΑΚΤΗΣΗ ΠΛΗΡΟΦΟΡΙΩΝ”, CHRISTOPHER D. MANNING, PRABHAKAR RAGHAVAN, HINRICH eudoxus link “Ανάκτηση Πληροφορίας”, 2η Έκδοση, Baeza-Yates Ricardo, Ribeiro-Neto...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πληροφοριακά Συστήματα και Εφοδιαστική Αλυσίδα",
        "url": "/site-gem/gr/courses/information-systems-and-supply-management/",
        "excerpt": "Βιβλιογραφία: -“Πληροφοριακά Συστήματα Διαχείρισης Επιχειρησιακών Πόρων:Στρατηγικές &amp; Εφαρμογές, Γιάννης Πολλάλης, Αθανάσιος Βοζίκης”eudoxus link -“ΣΥΓΧΡΟΝΑ ΕΠΙΧΕΙΡΗΣΙΑΚΑ ΣΥΣΤΗΜΑΤΑ, ΚΩΝΣΤΑΝΤΙΝΟΣ Ι. ΣΤΕΦΑΝΟΥ, ΧΡΗΣΤΟΣ...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Διοίκηση Ασφάλειας Πληροφοριακών Συστημάτων",
        "url": "/site-gem/gr/courses/information-systems-security-management/",
        "excerpt": "Βιβλιογραφία:\n\n  “Διαχείριση Ασφάλειας Πληροφοριών, Σωκράτης Κάτσικας”eudoxus link\n  “Ασφάλεια Πληροφοριακών Συστημάτων, Σωκτ. Κάτσικας - Δ. Γκρίτζαλης - Στεφ. Γκρίτζαλης”eudoxus link\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Θεωρία της Πληροφορίας",
        "url": "/site-gem/gr/courses/information-theory/",
        "excerpt": "Βιβλιογραφία: ““Εισαγωγή στη θεωρία της πληροφορίας”, Αφράτη Φώτω, Εκδόσεις Συμμετρία, 1994”[eudoxus link}(https://service.eudoxus.gr/search/#a/id:45421/0) ““Εισαγωγή στη θεωρία Πληροφοριών, Κωδίκων και Κρυπτογραφίας”, Ν....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Τεχνολογίες Διαδικτύου",
        "url": "/site-gem/gr/courses/internet-technologies/",
        "excerpt": "Βιβλιογραφία: “Ανάπτυξη Web Εφαρμογών με PHP και MySQL”, Welling Luke,Thomson Laura, Εκδόσεις Α. Γκιούρδα, ISBN 960-512-357-6, 2005”eudoxus link “ΑΡΧΙΤΕΚΤΟΝΙΚΗ ΠΛΑΤΦΟΡΜΑΣ...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εισαγωγή στην Επιστήμη των Υπολογιστών",
        "url": "/site-gem/gr/courses/introduction-computer-science/",
        "excerpt": "Βιβλιογραφία: “Εισαγωγή στη σύγχρονη επιστήμη των υπολογιστών, Lister Andrew M., Εκδόσεις Δίαυλος, ISBN 978-960-7140-65-4, 2000” “Εισαγωγή στην επιστήμη των Υπολογιστών,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εισαγωγή στον Προγραμματισμό",
        "url": "/site-gem/gr/courses/itp/",
        "excerpt": "Βιβλιογραφία: “C Προγραμματισμός”, 7η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Χ. ΓΚΙΟΥΡΔΑ &amp; ΣΙΑ ΕΕ, ISBN 978-960-512-6414, 2014” eudoxus link...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " Γλωσσική Τεχνολογία",
        "url": "/site-gem/gr/courses/language-technology/",
        "excerpt": "Βιβλιογραφία: ““Η μηχανική μετάφραση και η ελληνική γλώσσα”, Σταύρου Μ., Τζεβελέκου Μ., Ινστιτούτο Επεξεργασίας του Λόγου, Εκδόσεις Καστανιώτη, ISBN 960-03-2718-1,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Γραμμική Άλγεβρα",
        "url": "/site-gem/gr/courses/linear-algebra/",
        "excerpt": "Βιβλιογραφία: “Μια Εισαγωγή στη Γραμμική Άλγεβρα Τόμος Ι, ΒΑΡΣΟΣ, ΔΕΡΙΖΙΩΤΗΣ, ΕΜΜΑΝΟΥΗΛ, ΜΑΛΙΑΚΑΣ, ΜΕΛΑΣ, ΤΑΛΕΛΛΗ, Εκδόσεις ΣΟΦΙΑ, 2008” “ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΓΡΑΜΜΙΚΗ...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Λογικός Προγραμματισμός",
        "url": "/site-gem/gr/courses/logic-programming/",
        "excerpt": "Βιβλιογραφία: “Μητακίδης Γιώργος, “Από τη λογική στο λογικό προγραμματισμό και την Prolog”, Εκδόσεις ΚΑΡΔΑΜΙΤΣΑ, 1992.” eudoxus link “ΝΟΤΟΠΟΥΛΟΣ ΠΑΝΑΓΙΩΤΗΣ, “ΠΡΟΓΡΑΜΜΑΤΙΖΟΝΤΑΣ...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Διαχείριση Έργων Πληροφορικής",
        "url": "/site-gem/gr/courses/management-of-it-projects/",
        "excerpt": "Βιβλιογραφία:\n\n  “Διαχείριση έργων πληροφορικής, Κιουντούζης Ευάγγελος Α.”eudoxus link\n  “Διαχείριση έργου - project management, Burke Rory”eudoxus link\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μαθηματικός Προγραμματισμός",
        "url": "/site-gem/gr/courses/mathematical-programming/",
        "excerpt": "Βιβλιογραφία:\n\n  “Γραμμικός Προγραμματισμός», Γ. Σίσκος, 2000, ΕΚΔΟΣΕΙΣ ΝΕΩΝ ΤΕΧΝΟΛΟΓΙΩΝ”eudoxus link\n  “Γραμμικός Προγραμματισμός», Δημήτρης Δεσπότης, 2011, ΕΚΔΟΣΕΙΣ ΔΕΣΠΟΤΗΣ ΔΗΜΗΤΡΙΟΣ”eudoxus link\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εισαγωγή στα Πληροφοριακά Συστήματα",
        "url": "/site-gem/gr/courses/mis/",
        "excerpt": "Βιβλιογραφία: “Κιουντούζης, Ε. (2009) ”Μεθοδολογίες Ανάλυσης και Σχεδιασμού Πληροφοριακών Συστημάτων” , Εκδόσεις Μπένου (3η Έκδοση), Αθήνα.” eudoxus link “Avison, D.,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πολυμέσα",
        "url": "/site-gem/gr/courses/multimedia/",
        "excerpt": "Βιβλιογραφία: Τεχνολογία πολυμέσων, Δημητριάδης Σταύρος Ν., Πομπόρτσης Ανδρέας Σ., Τριανταφύλλου Ευάγγελος Γ., Εκδόσεις ΤΖΙΟΛΑ, ISBN 978-960-418-025-7, 2004 Πολυμέσα Θεωρία και...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Δίκτυα I",
        "url": "/site-gem/gr/courses/networks1/",
        "excerpt": "Βιβλιογραφία: ““Δίκτυα Επικοινωνιών, ένα πρώτο μάθημα”, Jean Walrand, Μετάφραση-Επιμέλεια: Ιωάννης Σταυρακάκης, Λάζαρος Μεράκος, Εκδόσεις ΕΙΔΙΚΟΣ ΛΟΓΑΡΙΑΣΜΟΣ ΚΟΝΔΥΛΙΩΝ ΕΡΕΥΝΑΣ – ΕΚΠΑ,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Δίκτυα II",
        "url": "/site-gem/gr/courses/networks2/",
        "excerpt": "Βιβλιογραφία: ““ΔΙΚΤΥΑ ΥΠΟΛΟΓΙΣΤΩΝ: ΜΙΑ ΠΡΟΣΕΓΓΙΣΗ ΑΠΟ ΤΗ ΣΚΟΠΙΑ ΤΩΝ ΣΥΣΤΗΜΑΤΩΝ”, LARRY L. PETERSON, BRUCE S. DAVIE, Εκδόσεις Κλειδάριθμος, ISBN 978-960-461-266-6,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αντικειμενοστρεφής Προγραμματισμός",
        "url": "/site-gem/gr/courses/object-oriented-programming/",
        "excerpt": "Βιβλιογραφία: ““Java προγραμματισμός”, 10η Έκδοση, Paul Deitel, Harvey Deitel, Εκδόσεις Χ. ΓΚΙΟΥΡΔΑ ΣΙΑ ΕΕ, ISBN 978-960-512-6810, 2015”eudoxus link ““Java Eισαγωγή...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Λειτουργικά Συστήματα",
        "url": "/site-gem/gr/courses/operating-systems/",
        "excerpt": "Βιβλιογραφία: ““Λειτουργικά Συστήματα Αρχές Σχεδίασης”, William Stallings, 8η Έκδοση, Εκδόσεις Τζιόλα”eudoxus link ““ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ ΣΕ UNIX”,MARC J. ROCHKIND, ΕΚΔΟΣΕΙΣ ΚΛΕΙΔΑΡΙΘΜΟΣ”eudoxus link...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Παράλληλος Προγραμματισμός",
        "url": "/site-gem/gr/courses/parallel-programming/",
        "excerpt": "Βιβλιογραφία: “Peter S. Pacheco, ”Εισαγωγή στον Παράλληλο Προγραμματισμό” , ΚΛΕΙΔΑΡΙΘΜΟΣ, 2015.” [eudoxus link] (https://service.eudoxus.gr/search/#a/id:50656351/0) “Γραμματή Πάντζιου, Βασίλειος Μάμαλης, Αλέξανδρος Τομαράς...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αναγνώριση Προτύπων",
        "url": "/site-gem/gr/courses/pattern-recognition/",
        "excerpt": "Βιβλιογραφία: ““Αναγνώριση προτύπων”, ΣΤΡΙΝΤΖΗΣ Μ., Εκδόσεις Αδελφοί Κυριακίδη, ISBN 978-960-343-290-6, 2007” [eudoxus link] (https://service.eudoxus.gr/search/#a/id:6378/0) ““Ευφυής έλεγχος”, Κινγκ Ρ., Εκδόσεις ΤΖΙΟΛΑ,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μοντέλα Κβαντικού και Μοριακού Υπολογισμού",
        "url": "/site-gem/gr/courses/quantum-dna-computing/",
        "excerpt": "Βιβλιογραφία: “ΚΒΑΝΤΙΚΟΙ ΥΠΟΛΟΓΙΣΤΕΣ: ΒΑΣΙΚΕΣ ΕΝΝΟΙΕΣ”, Ιωάννης Καραφυλλίδης, Εκδόσεις ΚΛΕΙΔΑΡΙΘΜΟΣ, ISBN 978-960-209-816-5, 2005.” “Το νέο κβαντικό σύμπαν”, T.HEY, P.WALTERS, Εκδόσεις ΑΛ....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ασφάλεια υπολογιστών και προστασία δεδομένων",
        "url": "/site-gem/gr/courses/security/",
        "excerpt": "Βιβλιογραφία: “”Ασφάλεια Πληροφοριακών Συστημάτων” Κ. Κάτσικας, Δ. Γκρίτζαλης, Σ. Γκρίτζαλης. Νέων Τεχνολογιών, 2004.” eudoxus link “”Βασικές Αρχές Ασφάλειας Δικτύων” W....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Σημασιολογικός και Κοινωνικός Ιστός",
        "url": "/site-gem/gr/courses/semantic-and-social-web/",
        "excerpt": "Βιβλιογραφία: “ΕΙΣΑΓΩΓΗ ΣΤΟ ΣΗΜΑΣΙΟΛΟΓΙΚΟ ΙΣΤΟ, GRIGORIS ANTONIOU, FRANK VAN HARMELEN”eudoxus link “Εξόρυξη γνώσης από βάσεις δεδομένων και τον παγκόσμιο ιστό,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Προσομοίωση και Μοντελοποίηση",
        "url": "/site-gem/gr/courses/simulation-modeling/",
        "excerpt": "Βιβλιογραφία: ““Προσομοίωση διακριτών συστημάτων”, Khoshnevis Behrokh, Εκδόσεις Δίαυλος, ISBN 978-960-531-031-8, 1999” eudoxus link ““Προσομοίωση δικτύων υπολογιστών”, Πομπόρτσης Ανδρέας Σ., Τσουλφάς...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κοινωνικά και Νομικά Θέματα των ΤΠΕ",
        "url": "/site-gem/gr/courses/social-and-legal-issues-of-icts/",
        "excerpt": "Βιβλιογραφία:\n\n  “Το δίκαιο του διαδικτύου (internet), Σιδηρόπουλος Θεόδωρος”eudoxus link\n  “Το δίκαιο του ηλεκτρονικού εμπορίου, Αλεξανδρίδου Ελίζα Δ.”eudoxus link\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Τεχνολογία Λογισμικού",
        "url": "/site-gem/gr/courses/software-engineering/",
        "excerpt": "Βιβλιογραφία: ““Ο ΠΡΑΚΤΙΚΟΣ ΠΡΟΓΡΑΜΜΑΤΙΣΤΗΣ”, ANDREW HUNT, DAVID THOMAS, Εκδόσεις Κλειδάριθμος, ISBN 978-960-461-135-5, 2008”eudoxus link ““ΑΝΑΓΝΩΣΗ ΚΩΔΙΚΑ”, ΔΙΟΜΗΔΗΣ ΣΠΙΝΕΛΛΗΣ, Εκδόσεις Κλειδάριθμος,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ειδικά Θέματα Ασφάλειας Πληροφοριών",
        "url": "/site-gem/gr/courses/specific-information-security-issues/",
        "excerpt": "Βιβλιογραφία: ” ΒΑΣΙΚΕΣ ΑΡΧΕΣ ΑΣΦΑΛΕΙΑΣ ΔΙΚΤΥΩΝ: ΕΦΑΡΜΟΓΕΣ ΚΑΙ ΠΡΟΤΥΠΑ”, WILLIAM STALLINGS eudoxos link ” Ασφάλεια Πληροφοριακών Συστημάτων”, Σωκτ. Κάτσικας -...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Επεξεργασία Ομιλίας και Ήχου",
        "url": "/site-gem/gr/courses/speech-processing/",
        "excerpt": "Βιβλιογραφία:\n\n  “Ψηφιακή επεξεργασία σήματος, Antoniou A.”eudoxus link\n  “Ψηφιακή Επεξεργασία Φωνής: Θεωρία και Εφαρμογές, Rabiner L.”eudoxus link\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Στατιστική ",
        "url": "/site-gem/gr/courses/statistics/",
        "excerpt": "Βιβλιογραφία: “Περιγραφική και διερευνητική στατιστική ανάλυση δεδομένων”, Γεωργιακώδης Φώτης A.,Τσίμπος Κλέων Χ., Εκδόσεις Σταμούλη, ISBN 978-960-351-315-6, 2000”eudoxus link “Πιθανότητες, τυχαίες...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Στρατηγική και Διοίκηση Πληροφοριακών Συστημάτων",
        "url": "/site-gem/gr/courses/strategic-management-of-information-systems/",
        "excerpt": "Βιβλιογραφία: “ΠΛΗΡΟΦΟΡΙΑΚΑ ΣΥΣΤΗΜΑΤΑ ΔΙΟΙΚΗΣΗΣ, KENNETH C. LAUDON, JANE P. LAUDON”eudoxus link “ΚΑΙΝΟΤΟΜΙΑ, ΣΤΡΑΤΗΓΙΚΗ, ΑΝΑΠΤΥΞΗ ΚΑ ΠΛΗΡΟΦΟΡΙΑΚΑ ΣΥΣΤΗΜΑΤΑ, Γεώργιος Δουκίδης”eudoxus link...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πιθανότητες",
        "url": "/site-gem/gr/courses/theory-of-probability/",
        "excerpt": "Βιβλιογραφία: “ΕΙΣΑΓΩΓΗ ΣΤΗ ΘΕΩΡΙΑ ΠΙΘΑΝΟΤΗΤΩΝ”, HOEL P., PORT S., STONE C., Εκδόσεις ΙΤΕ-ΠΑΝΕΠΙΣΤΗΜΙΑΚΕΣ ΕΚΔΟΣΕΙΣ ΚΡΗΤΗΣ, ISBN 978-960-524-156-8, 2009”eudoxus link “Πιθανότητες,...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
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
        "title": "Θεόδωρος Ανδρόνικος",
        "url": "/site-gem/gr/faculty/andronikos/",
        "excerpt": "education: “Δίπλωμα Ηλεκτρολόγου Μηχανικού και Μηχανικού Υπολογιστών με κατεύθυνση Πληροφορικής από τη Σχολή Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών του Εθνικού...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αγγελική Τσώχου",
        "url": "/site-gem/gr/faculty/atsohou/",
        "excerpt": "education: “Πτυχίο Πληροφορικής, Τμήμα Πληροφορικής, Οικονομικό Πανεπιστήμιο Αθηνών” “Μεταπτυχιακό Δίπλωμα Ειδίκευσης, MSc: «Πληροφοριακά Συστήματα», Τμήμα Πληροφορικής, Οικονομικό Πανεπιστήμιο Αθηνών” “Διδακτορικό...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μάρκος Αυλωνίτης",
        "url": "/site-gem/gr/faculty/avlonitis/",
        "excerpt": "education:\n\n  “Πτυχίο Φυσικής, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, Σχολή Θετικών Επιστημών”\n  “Διδακτορικό Δίπλωμα στη Μηχανική, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, Πολυτεχνική Σχολή”\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κωνσταντίνος Χωριανόπουλος",
        "url": "/site-gem/gr/faculty/choko/",
        "excerpt": "education: “Δίπλωμα Ηλεκτρονικών Μηχανικών και Μηχανικών Υπολογιστών, Πολυτεχνείο Κρήτης” “Μεταπτυχιακό Μάρκετινγκ και Επικοινωνία με Νέες Τεχνολογίες, Τμήμα Μάρκετινγκ και Επικοινωνίας,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Χρήστος Αναγνωστόπουλος",
        "url": "/site-gem/gr/faculty/christos/",
        "excerpt": "education: “Πτυχίο Τμήματος Πληροφορικής και Τηλεπικοινωνιών, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών” “Μεταπτυχιακό Δίπλωμα Ειδίκευσης “Προηγμένα Πληροφοριακά Συστήματα”, Τμήμα Πληροφορικής και...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Δημήτριος Τσουμάκος",
        "url": "/site-gem/gr/faculty/dtsouma/",
        "excerpt": "education: “Πτυχίο Ηλεκτρολόγου Μηχανικού και Μηχανικού Η/Υ, Τμήμα Ηλεκτρολόγων Μηχ. και Μηχ. Υπολογιστών, Εθνικό Μετσόβιο Πολυτεχνείο. Τίτλος Διπλωματικής Εργασίας: ‘Ηλεκτρονικός...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εμμανουήλ Μάγκος",
        "url": "/site-gem/gr/faculty/emagos/",
        "excerpt": "education:\n\n  “Πτυχίο Πληροφορικής, Πανεπιστήμιο Πειραιώς”\n  “Διδακτορικό Δίπλωμα σε “Ασφαλή Ηλεκτρονικά Συστήματα Συναλλαγών μέσω Internet”, Πανεπιστήμιο Πειραιώς”\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Φοίβος Μυλωνάς",
        "url": "/site-gem/gr/faculty/fmylonas/",
        "excerpt": "education: “Δίπλωμα Ηλεκτρολόγου Μηχανικού και Μηχανικού Ηλεκτρονικών Υπολογιστών, Σχολή Ηλεκτρολόγων Μηχανικών και Μηχανικών Ηλεκτρονικών Υπολογιστών, Ε.Μ.Π., 2001” “Μεταπτυχιακό Δίπλωμα Ειδίκευσης...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κάτια Λήδα Κερμανίδου",
        "url": "/site-gem/gr/faculty/kerman/",
        "excerpt": "education: “Δίπλωμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών, Πανεπιστήμιο Πατρών” “Διδακτορικό Δίπλωμα με τίτλο διατριβής «Αυτόματη Μάθηση Συντακτικών Εξαρτήσεων και Ανάπτυξη...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μιχαήλ Στεφανιδάκης",
        "url": "/site-gem/gr/faculty/mistral/",
        "excerpt": "education: “Δίπλωμα Μηχανικού Ηλεκτρονικών Υπολογιστών και Πληροφορικής, Πανεπιστήμιο Πατρών” “Διδακτορικό Δίπλωμα με θέμα τη “Σχεδίαση και Μελέτη Απόδοσης Παράλληλης Αρχιτεκτονικής...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κωνσταντίνος Οικονόμου",
        "url": "/site-gem/gr/faculty/okon/",
        "excerpt": "education: “Δίπλωμα Μηχανικού Ηλεκτρονικών Υπολογιστών και Πληροφορικής, Πανεπιστήμιο Πατρών” “Μεταπτυχιακό Δίπλωμα Ειδίκευσης, MSc in Communication and Signal Processing from the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αδαμαντία Πατέλη",
        "url": "/site-gem/gr/faculty/pateli/",
        "excerpt": "education: “Πτυχίο Πληροφορικής, Οικονομικό Πανεπιστήμιο Αθηνών” “ΜSc in Electronic Commerce, University of Manchester Institute of Science &amp; Technology” “Διδακτορικό Δίπλωμα...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Παναγιώτης Κουρουθανάσης",
        "url": "/site-gem/gr/faculty/pkour/",
        "excerpt": "education: “Πτυχίο Πληροφορικής, Οικονομικό Πανεπιστήμιο Αθηνών” “Μεταπτυχιακό δίπλωμα ειδίκευσης στις Επιστήμες των Αποφάσεων, Οικονομικό Πανεπιστήμιο Αθηνών” “Διδακτορικό δίπλωμα στα Πληροφοριακά...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Σπύρος Σιούτας",
        "url": "/site-gem/gr/faculty/sioutas/",
        "excerpt": "education: “Δίπλωμα Μηχανικού Η/Υ &amp; Πληροφορικής, Πανεπιστήμιο Πατρών” “Μεταπτυχιακό Δίπλωμα Ειδίκευσης, MSc: «Τεχνικές εξάλειψης κατανεμημένης πολυπλοκότητας και εφαρμογή τους στη...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Βασίλειος Χρυσικόπουλος",
        "url": "/site-gem/gr/faculty/vchris/",
        "excerpt": "education: “Δίπλωμα Φυσικομαθηματικής Σχολής Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης” “MSc στην Επιχειρησιακή Έρευνα, Chelsea College, London University” “PhD Royal Holloway, London University”...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Παναγιώτης Βλάμος ",
        "url": "/site-gem/gr/faculty/vlamos/",
        "excerpt": "education:\n\n  “Πτυχίο Μαθηματικών, Πανεπιστήμιο Αθηνών”\n  “Διδακτορικό Δίπλωμα στα Μαθηματικά, Τμήμα Εφαρμοσμένων Μαθηματικών και Φυσικών Επιστημών, Ε.Μ. Πολυτεχνείου.”\n\n\n",
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
        "title": "Προπτυχιακά Μαθήματα",
        "url": "/site-gem/gr/courses/",
        "excerpt": "Για το ακαδημαϊκό έτος 2015 – 2016 εισήχθησαν στο Τμήμα Πληροφορικής 200 φοιτητές/τριες με το σύστημα των Πανελληνίων Εξετάσεων από...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Προσωπικό",
        "url": "/site-gem/gr/faculty/",
        "excerpt": "Καθηγητές Βασίλειος Χρυσικόπουλος Πληροφορική – Δίκτυα – Ασφάλεια Πληροφοριών Παναγιώτης Βλάμος Μαθηματικά με έμφαση στα Μοντέλα Εφαρμογών Αναπληρωτές Καθηγητές Δημήτριος...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εργαστήρια",
        "url": "/site-gem/gr/groups/",
        "excerpt": "Εργαστήριο Βιοπληροφορικής και Ανθρώπινης Ηλεκτροφυσιολογίας (BIHELab) Το εργαστήριο Βιοπληροφορικής και Ανθρώπινης Ηλεκτροφυσιολογίας καλύπτει τις ερευνητικές δραστηριότητες του Τμήματος Πληροφορικής του...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Τμήμα Πληροφορικής",
        "url": "/site-gem/gr/home/",
        "excerpt": "Ανακοινώσεις Ενημερωθείτε για τα τελευταία νέα του τμήματος Πληροφορικής. Learn More Ερευνητικά Προγράμματα Δείτε όλα τα ερευνητικά προγράμματα του τμήματος...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ανθρωπιστικές Επιστήμες",
        "url": "/site-gem/gr/humanistic/",
        "excerpt": "Γραφικά με Υπολογιστές Βασικές έννοιες γραφικών με υπολογιστές και εφαρμογές τους, Ιστορία και γενικά χαρακτηριστικά, Διανυσματική(ά) / Πλεγματική(ά) απεικόνιση/γραφικά, Εισαγωγικά......",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Index",
        "url": "/site-gem/gr/index/",
        "excerpt": "",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μαθήματα Μεταπτυχιακού",
        "url": "/site-gem/gr/msc-courses/",
        "excerpt": "Διοικητική Πληροφοριακών Συστημάτων Α. Αξιοποίηση της πληροφορικής από τους οργανισμούς: Σημασία της πληροφορικής στους σύγχρονους οργανισμούς. Στρατηγικός Σχεδιασμός Π.Σ.. Πληροφοριακά...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Pages",
        "url": "/site-gem/gr/pages/",
        "excerpt": "&lt;h2 id=\"courses\" class=\"archive__subtitle\"&gt;&lt;/h2&gt; Τεχνητή Νοημοσύνη Στόχοι της Τεχνητής Νοημοσύνης. Ιστορική Αναδρομή. Προβλήματα και επίλυση. Τεχνικές Αναζήτησης. Τυφλή και πληροφορημένη αναζήτηση....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ανακοινώσεις",
        "url": "/site-gem/gr/posts/",
        "excerpt": "2016 2ο Παγκόσμιο Συνέδριο GeNeDis 2016 Το 2ο Παγκόσμιο Συνέδριο για την Γενετική, Γηριατρική και την Έρευνα νευροεκφυλιστικών νόσων, το...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Προγράμματα",
        "url": "/site-gem/gr/projects/",
        "excerpt": "Cultural Understanding through Learning and Technology (CULT) Το έργο CULT εστιάζει πάνω στην μελέτη των κοινωνικών επιδράσεων του συστήματος σε...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αναζήτηση στην ιστοσελίδα",
        "url": "/site-gem/gr/search/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πληροφοριακών Συστημάτων",
        "url": "/site-gem/gr/systems/",
        "excerpt": "Συστήματα Υποστήριξης Αποφάσεων Εισαγωγή στη θεωρία Αποφάσεων, Η φιλοσοφία των Συστημάτων Υποστήριξης Αποφάσεων και ο ρόλος τους στις διαδικασίες λήψης...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ερευνητικά Ενδιαφέροντα του Τμήματος",
        "url": "/site-gem/gr/tags/",
        "excerpt": "XPath) Αντιλήψεις Επικινδυνότητας και Ενημερότητα Χρηστών Ηλεκτρονική Διακυβέρνηση και Πληροφοριακά Συστήματα μηχανική περιβάλλον) Crowdsourcing Αδαμαντία Πατέλη Διοίκηση Πληροφοριακών Συστημάτων και...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Εργαστήριο Βιοπληροφορικής και Ανθρώπινης Ηλεκτροφυσιολογίας (BIHELab)",
        "url": "/site-gem/gr/groups/bihe/",
        "excerpt": "Οι νευροεκφυλιστικές παθήσεις, προσβάλλουν πλέον ένα σημαντικό ποσοστό του πληθυσμού των σύγχρονων δυτικών κοινωνιών. Τα τελευταία χρόνια καταβάλλεται μια συστηματική...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εργαστήριο Υπολογιστικής Μοντελοποίησης (CMODLab)",
        "url": "/site-gem/gr/groups/cmod/",
        "excerpt": "Οι ερευνητικές δραστηριότητες που υποστηρίζονται από το Εργαστήριο Υπολογιστικής Μοντελοποίησης αφορούν ένα ευρύτατο φάσμα της επιστήμης της Πληροφορικής με έμφαση...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εργαστήριο Εφαρμογών Πληροφορικής στις Ανθρωπιστικές – Κοινωνικές Επιστήμες (HILab)",
        "url": "/site-gem/gr/groups/hi/",
        "excerpt": "Αφ’ ετέρου χρησιμοποιεί μεθοδολογίες των επιστημών αυτών για να προσδώσει στις υπηρεσίες και τα προϊόντα των νέων τεχνολογιών βέλτιστη ποιότητα...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εργαστήριο Πληροφορικών Συστημάτων και Βάσεων Δεδομένων (ISDLab)",
        "url": "/site-gem/gr/groups/isd/",
        "excerpt": "Οι επιστημονικές περιοχές που το εργαστήριο κυρίως καλύπτει αφορούν στις ακόλουθες: ανάλυση και σχεδιασμό πληροφοριακών συστημάτων, αξιολόγηση καινοτόμων εφαρμογών πληροφορικής,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εργαστήριο Δικτύων, Πολυμέσων και Ασφάλειας Συστημάτων (NMSLab)",
        "url": "/site-gem/gr/groups/nms/",
        "excerpt": "Ο εκπαιδευτικός ρόλος του NMSLab είναι να υποστηρίζει τα μαθήματα του προπτυχιακού προγράμματος σπουδών που σχετίζονται με δίκτυα υπολογιστών, συστήματα...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Εργαστήριο Κβαντικών και μή Συμβατικών Υπολογισμών(QUITLab)",
        "url": "/site-gem/gr/groups/quit/",
        "excerpt": "Our current areas of research include: Quantum Automata Automata on infinite inputs Modeling with Membrane automata SPARQL Queries and Finite...",
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
        "title": "Διοικητική Πληροφοριακών Συστημάτων",
        "url": "/site-gem/gr/msc/adm-inf-systems/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Τεχνητή Νοημοσύνη",
        "url": "/site-gem/gr/msc/ai/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Σχεδίαση της Διάδρασης Ανθρώπου-Υπολογιστή",
        "url": "/site-gem/gr/msc/id/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ερευνητικές Μέθοδοι",
        "url": "/site-gem/gr/msc/rm/",
        "excerpt": "\n",
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
        "title": "Αλέξανδρος Πανάρετος",
        "url": "/site-gem/gr/people/alex/",
        "excerpt": "education:\n\n  “BEng Software Engineering, Univerisity of Wales, Aberystwyth”\n  “MSc E-Commerce Technology, Essex University”\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Αθανάσιος Αλεξίου",
        "url": "/site-gem/gr/people/alexiou,md/",
        "excerpt": "### education:\n - PhD in Bioinformatics, Ionian University \n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Έλενα Λάσκαρι",
        "url": "/site-gem/gr/people/elena/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Βαρβάρα Γαρνέλη",
        "url": "/site-gem/gr/people/garneli/",
        "excerpt": "education: BSc in Informatics, Athens University of Economics and Business MSc in Informatics and Humanistic Studies, Ionian University PhD in...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Κωνσταντίνος Γιαννάκης",
        "url": "/site-gem/gr/people/giannakis/",
        "excerpt": "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ιωάννης Καρύδης",
        "url": "/site-gem/gr/people/karydis/",
        "excerpt": "education: “Phd , Auth, thesis: Mining and retrieval methods for acoustic and symbolic musical data.” “MSc Advanced Methods in Computer...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πάτρικ Μικάλεφ",
        "url": "/site-gem/gr/people/mikalef/",
        "excerpt": "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science in Business Informatics(MSc),Utrecht University PhD in IT Strategy,Ionian...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ηλίας Παππάς",
        "url": "/site-gem/gr/people/pappas/",
        "excerpt": "education:\n\n  PhD in E-Commerce,Ionian University, Dept. of Informatics\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Γεώργιος Παξινός",
        "url": "/site-gem/gr/people/paxinos/",
        "excerpt": "education:\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μαρία Ψύχα",
        "url": "/site-gem/gr/people/psiha/",
        "excerpt": "education: Bachelor of Science (BSc),Ionian University, Dept. of Informatics Master of Science (MSc),Ionian University, Dept. of Informatics PhD in Bioinformatics,Ionian...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Σπύρος Βούλγαρης",
        "url": "/site-gem/gr/people/svoul/",
        "excerpt": "education:\n\n  “Πτυχίο, Τμήμα Ηλεκτρολόγων Μηχανικών και Μηχ. Η/Υ, Εθνικό Μετσόβιο Πολυτεχνείο”\n  “Μεταπτυχιακό, Τμήμα Αρχειονομίας και Βιβλιοθηκονομίας, Ιόνιο Παναεπιστήμιο”\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Σωτηρία-Σοφία Αρωνιάδα",
        "url": "/site-gem/gr/people/swthria/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Bernd Wegner",
        "url": "/site-gem/gr/people/wegner/",
        "excerpt": "education:\n",
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
        "title": "Εγγραφή Πρωτοετών Φοιτητών 2016-2017",
        "url": "/site-gem/gr/posts/2016/09/12/freshman2016-registration/",
        "excerpt": "Για το σκοπό αυτό η Γραμματεία χρειάζεται να έχει: εκτυπωμένη την αίτηση εγγραφής που υποβλήθηκε από τους επιτυχόντες ηλεκτρονικά στην...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Διοργάνωση συνεδρίου του έργου ADRIATinn",
        "url": "/site-gem/gr/posts/2016/09/21/adriatinn-conference/",
        "excerpt": "Το έργο στοχεύει στην προώθηση και υποστήριξη της καινοτομίας μέσω της ανάπτυξης ενός διασυνοριακού οικοσυστήματος το οποίο στηρίζει την συνεχή...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Έναρξη Μαθημάτων Προπτυχιακού",
        "url": "/site-gem/gr/posts/2016/09/28/undergrad-studies2016-start/",
        "excerpt": "Τα μαθήματα του Προπτυχιακού ξεκινούν την Δευτέρα 3 Οκτωβρίου 2016. Το ωρολόγιο πρόγραμμα του 1ου εξαμήνου μπορείτε να το δείτε...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Clifford Kentros Guest Lecture",
        "url": "/site-gem/gr/posts/2016/10/05/kentros-guest-lecture/",
        "excerpt": "Ο Καθηγητής Ιατρικής, Clifford Kentros, που ηγείται ερευνητικής ομάδας των διάσημων Νομπελιστών May-Britt και Edvard Moser (2014), θα επισκεφτεί την...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "2ο Παγκόσμιο Συνέδριο GeNeDis 2016",
        "url": "/site-gem/gr/posts/2016/10/20/genedis-conference-2016/",
        "excerpt": "Το συνέδριο θα επικεντρωθεί στις πρόσφατες εξελίξεις που αφορούν τους παραπάνω τομείς ξεκινώντας από την πρόοδο στο ερευνητικό πεδίο και...",
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
        "url": "/site-gem/gr/projects/cult/",
        "excerpt": "Οι σχέσεις απομακρυσμένων κοινοτήτων θα μπορούσαν να ενισχυθούν διαμέσου των νέων τεχνολογιών επικοινωνίας από απόσταση (π.χ. WiFi, Bluetooth, Δημόσιες οθόνες,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Discovery Space(D-Space)",
        "url": "/site-gem/gr/projects/d-space/",
        "excerpt": "Το έργο Discovery Space (D-Space) παρέχει τη δυνατότητα πρόσβασης και από κοινού χρήσης εργαλείων και εκπαιδευτικών πηγών όχι μόνο σε...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μοντελοποίηση της Δυναμικής Αυτοοργάνωσης και της Καταστολής του πληθυσμού του δάκου σε πραγματικό Οικο-Σύστημα του Δήμου Αγίου Γεωργίου, Κέρκυρας(Δάκος)",
        "url": "/site-gem/gr/projects/dakos/",
        "excerpt": "Ο δάκος είναι ο σοβαρότερος εχθρός της ελαιοπαραγωγής, προκαλώντας κάθε χρόνο πολλές σημαντικές οικονομικές ζημιές, τόσο με την υποβάθμιση των...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "ΕΠΕΑΕΚ: ΕΝΘΑΡΡΥΝΣΗ ΕΠΙΧΕΙΡΗΜΑΤΙΚΩΝ ΔΡΑΣΕΩΝ, ΚΑΙΝΟΤΟΜΙΚΩΝ ΕΦΑΡΜΟΓΩΝ ΚΑΙ ΜΑΘΗΜΑΤΩΝ ΕΠΙΛΟΓΗΣ ΦΟΙΤΗΤΩΝ ΚΑΙ ΣΠΟΥΔΑΣΤΩΝ",
        "url": "/site-gem/gr/projects/entrepreneurship/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Πλατφόρμα για την δια-ακαδημαική συνεργασία στην καινοτομία(PaCiNNo)",
        "url": "/site-gem/gr/projects/pacinno/",
        "excerpt": "Ο στόχος του έργου PACiNNO είναι η δημιουργία μιας πλατφόρμας για τη συνεργασία στον τομέα της έρευνας και της καινοτομίας...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "PromO(nto)tion",
        "url": "/site-gem/gr/projects/promontotion/",
        "excerpt": "ΑΡΧΙΜΗΔΗΣ ΙΙΙ, ΕΣΠΑ 2007-2013 Για την υλοποίηση του εργαλείου θα χρησιμοποιηθούν οι νέες τεχνολογίες, και συγκεκριμένα θα σχεδιαστεί ένα εύχρηστο,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Μετάφραση για Μαζικά Ανοικτά Διαδικτυακά Μαθήματα(TraMOOC)",
        "url": "/site-gem/gr/projects/tramooc/",
        "excerpt": "Διάρκεια: 01/02/2015 – 31/01/2018 Πρόγραμμα Χρηματοδότησης: Ηorizon 2020 Προϋπολογισμός έργου: 3,270,710.00€ Ο στόχος του έργου είναι η υψηλής ποιότητας αυτόματη...",
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
