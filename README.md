# [Site-Gem](https://ioniodi.github.io/site-gem/gr/home/)

[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.6-blue.svg)](https://jekyllrb.com/)

:sparkles::sparkles::sparkles:

### Εισαγωγή

Οι τεχνολογίες που θα πρέπει να εξοικειωθείτε πρωτού προχωρήσετε στην επεξεργασία της ιστοσελίδας είναι οι εξής:

- HTML/HTML5
- CSS
- Javascript
- Linux
- Jekyll
- Liquid

### Εγκατάσταση
Υπάρχουν τρεις τρόποι για να εγκαταστήσετε το θέμα: ως `Ruby gem` (για ιστότοπους που φιλοξενούνται από μόνοι τους), ως ένα `plugin Ruby gem + jekyll-remote-theme` (σελίδες που φιλοξενούνται στο GitHub Pages) ή το fork / απευθείας αντιγραφή όλων των αρχείων θεμάτων στο αποθετήριό σας.

###### 1. Μέθοδος Ruby Gem

1.Εγκαταστήστε το θέμα ως `Ruby Gem` προσθέτοντάς το στο `Gemfile` σας :

  ```
gem "minimal-mistakes-jekyll"
  ```

2.Λαμβάνετε και ενημερώστε τα πακέτα `bundled gems` τρέχοντας την ακόλουθη εντολή `Bundler`:

  ```
bundle
  ```
  
3.Ορίστε το θέμα στο αρχείο Jekyll `_config.yml` του έργου σας:

  ```
theme: minimal-mistakes-jekyll
  ```
  
4.Για να ενημερώσετε την έκδοση τρέξτε την εντολή  `bundle update`.

###### 2. Μέθοδος GitHub Pages

1.Δημιουργήστε / αντικαταστήστε τα περιεχόμενα του `Gemfile` σας με τα ακόλουθα:

  ```
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
  ```
  
2.Λαμβάνετε και ενημερώστε τα πακέτα bundled gems τρέχοντας την ακόλουθη εντολή `Bundler`:

  ```
bundle 
  ```

3.Προσθέστε το `remote_theme: "mmistakes / minimal-errors"` στο αρχείο `_config.yml`. Καταργήστε οποιοδήποτε άλλο θέμα: ή `remote_theme`:  entry.

### Χρήση

Για λεπτομερείς οδηγίες σχετικά με τον τρόπο ρύθμισης παραμέτρων, προσαρμογής, προσθήκης / μετεγκατάστασης περιεχομένου διαβάστε την [τεκμηρίωση του θέματος](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/).

### Συνεισφορά

Για κάθε σελίδα ή αλλαγή που κάνετε θα πρέπει πρώτα να δημιουργείτε ένα νέο κλαδί και μετά να κάνετε ένα αίτημα ενσωμάτωσης το οποίο συνοδεύεται από περιγραφικό τίτλο και σχόλιο με το ΑΜ σας. Για παράδειγμα, αν θέλετε να στείλετε δύο νέα ή αλλαγμένα αρχεία θα πρέπει να δημιουργήσετε ένα κλαδί για κάθε ένα, γιατί μπορεί να θέλουμε να κάνουμε δεκτό μόνο το ένα από τα δύο, π.χ., γιατί το ένα μπορεί να έχει κάποιο λάθος το οποίο δημιουργεί πρόβλημα στο κεντρικό αποθετήριο. 
Για να μειώσουμε τα αιτήματα που απορίπτονται θα πρέπει να δοκιμάζετε πρώτα τις αλλαγές και προσθήκες που κάνετε στο τοπικό αντίγραφο σας, αφού πρώτα [ενεργοποιήσετε από τις ρυθμίσεις την δυνατότητα για github-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). 

Αν έχετε κάποια αμφιβολία ρωτήστε τον υπεύθυνο για το project της συνεργατικής δημιουργίας της ιστοσελίδας.

###### Pull Requests 

Κατά την υποβολή pull request:

Κλωνοποιήστε το αποθετήριο.
Δημιουργήστε ένα κλάδο εκτός του master και δώστε του ένα σημαντικό όνομα (π.χ. my-awesome-new-feature).
Ανοίξτε ένα pull request στο GitHub και περιγράψτε την αλλαγή σας ή την διόρθωσή σας.

### Ανάπτυξη
Για να ρυθμίσετε το περιβάλλον σας για να αναπτύξετε αυτό το θέμα, εκτελέστε τις ακόλουθες εντολές :

Μόνο την πρώτη φορά:

  ```
sudo apt-get install git
gem install jekyll
gem install bundler
sudo apt-get install rubygems
git config --global user.email "email@example.com"
git config --global user.name "to onoma sou"
Κάνετε fork το minimal-ionio
Κάνετε ενεργοποιήση του github pages απο το κλαδί master/docs
git clone https://github.com/yourname/minimal-ionio.git
  ```

Σε κάθε χρήση:

  ```
cd minimal-ionio/test
bundle install
bundle exec jekyll serve
  ```

Για να δοκιμάσετε το θέμα, εκτελέστε τη εντολή `bundle exec jekyll serve` rake και ανοίξτε το πρόγραμμα περιήγησης στο `http://localhost:4000/test/`. Αυτό ξεκινά έναν διακομιστή `Jekyll` χρησιμοποιώντας περιεχόμενο στον κατάλογο δοκιμής. Καθώς γίνονται τροποποιήσεις στην ιστοσελίδα και στον ιστότοπο δοκιμών, θα ενεργοποιηθούν και θα δείτε τις αλλαγές στο πρόγραμμα περιήγησης μετά από μία ανανέωση.

### Credits

Η παρόν ιστοσελίδα βασίστηκε στα εξής θέματα
[minimalmistakes](https://mmistakes.github.io/minimal-mistakes/) + [multilingual](https://www.sylvaindurand.org/making-jekyll-multilingual/)

