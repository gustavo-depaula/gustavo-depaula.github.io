;;
;; Copyright (C) 2021 Gustavo de Paula
;;
;; Author: Gustavo de Paula <https://github.com/gustavo-depaula>
;; Maintainer: Gustavo de Paula <gustavodepaula@disroot.org>
;; Created: October 09, 2021
;; Modified: October 09, 2021
;; Version: 0.0.1
;; Keywords: abbrev bib c calendar comm convenience data docs emulations extensions faces files frames games hardware help hypermedia i18n internal languages lisp local maint mail matching mouse multimedia news outlines processes terminals tex tools unix vc wp
;; Homepage: https://github.com/gustavo.depaula/build-site
;; Package-Requires: ((emacs "24.3"))
;;
;; This file is not part of GNU Emacs.
;;
;;; Commentary:
;;
;;  Description
;;
;;; Code:


(require 'ox-publish)

(setq org-publish-project-alist
      (list
       (list "dpgu:main"
             :recursive t
             :base-directory "./content"
             :publishing-function 'org-html-publish-to-html
             :publishing-directory "./"
             :with-author nil           ;; Don't include author name
             :with-creator t            ;; Include Emacs and Org versions in footer
             :with-toc t                ;; Include a table of contents
             :section-numbers nil       ;; Don't include section numbers
             :time-stamp-file nil)))    ;; Don't include time stamp in file

(setq org-html-validation-link nil            ;; Don't show validation link
      org-html-head-include-scripts nil       ;; Use our own scripts
      org-html-head-include-default-style nil ;; Use our own styles
      org-html-head "<link rel=\"stylesheet\" href=\"./styles.css\" />")

;; Generate the site output
(org-publish-all t)


(message "Build complete")

;; (provide 'build-site)
;;; build-site.el ends here
