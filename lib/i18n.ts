export const languages = {
  fr: { name: "Français", dir: "ltr" },
  ar: { name: "العربية", dir: "rtl" },
} as const;

export type Language = keyof typeof languages;

export const translations = {
  fr: {
    // Header
    home: "Accueil",

    terms: "CGU",
    privacy: "Confidentialité",
    mechanics: "Dépanneurs",
    contact: "Contact",
    download: "Télécharger",
    downloadApp: "Télécharger l'app",
    joinAsPro: "Rejoins-nous comme dépanneur",
    // Homepage
    roadsideAssistance: "Disponible sur Android",
    heroTitle: "Raidin — Dépannage et remorquage 24/7",
    heroDescription: `En cas de panne ou d’accident, obtenez rapidement de l’aide. Un
                dépanneur professionnel à proximité intervient sur place ou
                remorque votre véhicule en toute sécurité`,
    seeHowItWorks: "Voir comment ça marche",
    coverage247: "iOS bientôt disponible.",

    // Features
    whyChooseRaidin: "Pourquoi choisir Raidin ?",
    featuresSubtitle:
      " Une expérience fluide, transparente et sécurisée pour tous vos déplacements.",
    reservation2Clicks: "Réservation en 2 clics",
    rapidInterventionDesc: `Indiquez votre destination et trouvez un chauffeur à proximité,
                instantanément.`,
    towingRepair: "Dépannage ou remorquage",
    realTimeTracking: "Suivi en temps réel",
    realTimeTrackingDesc: "Visualisez l’arrivée de votre chauffeur .",
    towingRepairDesc:
      "Batterie, crevaison, ouverture de porte, ou remorquage vers un garage partenaire : on s'occupe de tout.",
    accidentAssistance: "Assistance sinistre",
    accidentAssistanceDesc:
      "Sécurisation de la zone, accompagnement en cas d'accident et bonnes pratiques de sécurité.",
    paymentTracking: "Paiements sécurisés",
    paymentTrackingDesc:
      "Devis clair,payez directement cash, en toute sécurité.",
    verifiedDrivers: "Chauffeurs vérifiés",
    verifiedDriversDesc:
      "Tous nos chauffeurs et dépanneurs sont contrôlés et évalués pour votre sérénité.",
    // How it works
    howItWorks: "Comment ça marche",
    howItWorksSubtitle:
      "Quatre étapes simples pour une assistance sans stress.",
    step1Title: "Téléchargez l'app",
    step1Desc: "Installez Raidin depuis Google Play et créez votre compte.",
    step2Title: "Demandez une assistance",
    step2Desc: "Décrivez la panne/accident et confirmez votre position.",
    step3Title: "Un dépanneur arrive",
    step3Desc: "Le professionnel le plus proche est dépêché sur place.",
    step4Title: "Remorquage ou réparation",
    step4Desc: "Intervention sur place ou remorquage, paiement en espèces.",
    prerequisitesTitle: "Pré‑requis pour rejoindre le réseau",
    prerequisite1: "Entreprise enregistrée et pièces d’identité valides",
    prerequisite2: "Assurance professionnelle et responsabilité civile à jour",
    prerequisite3: "Véhicule d’intervention et équipements conformes",
    prerequisite4: "Respect des règles de sécurité et bonnes pratiques",
    prerequisite5: "Zone de couverture et disponibilité définies",
    // Pro How it works
    proStep1Title: "Inscription",
    proStep1Desc: "Créez votre compte Raidin Pro et envoyez vos documents.",
    proStep2Title: "Validation",
    proStep2Desc: "Nous vérifions vos infos, assurance et habilitations.",
    proStep3Title: "Réception de missions",
    proStep3Desc: "Activez-vous et acceptez les demandes proches.",
    proStep4Title: "Intervention & facture",
    proStep4Desc: "Réalisez la mission, validez le paiement et facturez.",
    // CTA
    needHelpNow: "Besoin d'aide maintenant ?",
    ctaDescription:
      "Téléchargez Raidin et demandez une assistance routière en quelques secondes.",
    downloadOnGooglePlay: "Télécharger sur Google Play",
    contactUs: "Nous contacter",

    // Footer
    footerDescription:
      "Raidin est une application d'assistance routière qui met en relation les automobilistes et des dépanneurs professionnels pour le dépannage sur place et le remorquage 24/7. Disponible sur Android",
    allRightsReserved: "Tous droits réservés.",
    madeWithLove: "Made with ❤️",
    contactQuestion: "Une question, un problème, une idée ? Écrivez-nous.",
    contactEmail: "Email",
    contactPhone: "Téléphone",
    contactSupportHours: "Support disponible du 7/7, 9h–23h (heure locale)",
    // Pro page
    proHeroTitle: "Raidin Pro — Boostez votre activité de dépannage",
    proHeroDesc:
      "Recevez des demandes d'assistance en temps réel, planifiez vos interventions et encaissez en toute simplicité. Gratuit à l'inscription, commissions transparentes.",
    becomePartner: "Devenir partenaire",
    advantagesTitle: "Les avantages de nous rejoindre",
    advantagesSubtitle:
      "Concentrez‑vous sur l'intervention. On s'occupe du reste.",

    qualifiedRequestsTitle: "Demandes qualifiées près de vous",
    qualifiedRequestsDesc:
      "Recevez des missions à proximité selon votre zone et vos disponibilités.",
    realTimeFlowTitle: "Flux en temps réel 24/7",
    realTimeFlowDesc:
      "Soyez alerté instantanément et acceptez en un geste depuis l’app.",
    simplifiedPaymentsTitle: "Paiements simplifiés",
    simplifiedPaymentsDesc: "Devis, paiement sécurisé.",
    integratedProToolsTitle: "Outils pro intégrés",
    integratedProToolsDesc:
      "Historique, photos d’intervention, signature client et notes.",
    transparentCommissionTitle: "Commission transparente",
    transparentCommissionDesc:
      "Aucune surprise : modèle clair, sans frais cachés. Résiliation libre.",
    dedicatedSupportTitle: "Support dédié",
    dedicatedSupportDesc:
      "Assistance prioritaire par chat/email pour les partenaires.",
  },
  ar: {
    // Header
    home: "الرئيسية",
    terms: "الشروط والأحكام",
    privacy: "الخصوصية",
    mechanics: "الميكانيكيين",
    contact: "اتصل بنا",
    download: "تحميل",
    downloadApp: "تحميل التطبيق",
    joinAsPro: "انضم إلينا كسحب المركبات ",
    // Homepage
    roadsideAssistance: "متوفر على أندرويد",

    heroTitle: "رائدين — إصلاح وسحب المركبات 24/7",
    heroDescription:
      "في حالة العطل أو الحادث، احصل على المساعدة بسرعة. ميكانيكي محترف قريب منك يتدخل في الموقع أو يسحب مركبتك بأمان تام.",
    seeHowItWorks: "شاهد كيف يعمل",
    coverage247: "iOS قريباً.",

    // Features
    whyChooseRaidin: "لماذا تختار رائدين؟",
    featuresSubtitle:
      "مساعدة موثوقة في حالة العطل أو الحادث: تدخل سريع، محترفون معتمدون، دفع آمن.",
    reservation2Clicks: "الحجز في خطوتين",
    towingRepair: "إصلاح أو سحب",
    towingRepairDesc:
      "بطارية، إطار مثقوب، فتح الباب، أو السحب إلى ورشة شريكة: نتولى كل شيء.",
    accidentAssistance: "مساعدة الحوادث",
    accidentAssistanceDesc:
      "تأمين المنطقة، مرافقة في حالة الحادث وممارسات السلامة الجيدة.",
    paymentTracking: "الدفع والمتابعة",
    paymentTrackingDesc:
      "عرض أسعار واضح، دفع آمن في التطبيق ومتابعة في الوقت الفعلي للتدخل.",
    realTimeTracking: "تتبع مباشر",
    realTimeTrackingDesc: "شاهد وصول السائق الخاص بك في الوقت الفعلي.",
    verifiedDrivers: "سائقون معتمدون",
    verifiedDriversDesc:
      "جميع سائقينا وميكانيكينا خضعوا للفحص والتقييم من أجل راحتك وطمأنينتك.",
    // How it works
    howItWorks: "كيف يعمل",
    howItWorksSubtitle: "أربع خطوات بسيطة للحصول على مساعدة بدون توتر.",
    step1Title: "حمل التطبيق",
    step1Desc: "حمل تطبيق رائدين من موقعنا وأنشئ حسابك.",
    step2Title: "اطلب المساعدة",
    step2Desc: "صف العطل/الحادث وأكد موقعك.",
    step3Title: "يصل المحترف",
    step3Desc: "يتم إرسال المحترف الأقرب إلى الموقع.",
    step4Title: "سحب أو إصلاح",
    step4Desc: "تدخل في الموقع أو سحب المركبة، والدفع نقداً.",
    contactQuestion: "عندك سؤال، مشكلة أو اقتراح؟ راسلنا.",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "الهاتف",
    contactSupportHours:
      "الدعم متوفر 7/7 من 9 صباحاً إلى 11 مساءً (بالتوقيت المحلي)",
    // CTA
    needHelpNow: "تحتاج مساعدة الآن؟",
    ctaDescription: "حمل رائدين واطلب مساعدة على الطريق في ثوانٍ معدودة.",
    downloadOnGooglePlay: "تحميل من Google Play",
    contactUs: "اتصل بنا",
    rapidInterventionDesc: "حدد وجهتك وابحث عن سائق قريب منك فوراً.",
    // Footer
    footerDescription:
      "رائدين هو تطبيق مساعدة على الطريق يربط بين السائقين والميكانيكيين المحترفين للإصلاح في الموقع والسحب 24/7.",
    allRightsReserved: "جميع الحقوق محفوظة.",
    madeWithLove: "صنع بـ ❤️",

    // Pro page
    proHeroTitle: "رائدين برو — عزز نشاط الإصلاح الخاص بك",
    proHeroDesc:
      "استقبل طلبات المساعدة في الوقت الفعلي، خطط لتدخلاتك واحصل على أموالك ببساطة. مجاني عند التسجيل، عمولات شفافة.",
    becomePartner: "كن شريكاً",
    advantagesTitle: "مزايا الانضمام إلينا",
    advantagesSubtitle: "ركز على التدخل. نحن نتولى الباقي.",
    qualifiedRequestsTitle: "طلبات مؤهلة بالقرب منك",
    qualifiedRequestsDesc: "استقبل مهاماً قريبة حسب منطقتك وتوفرك.",
    realTimeFlowTitle: "تدفق مباشر 24/7",
    realTimeFlowDesc:
      "ستتلقى تنبيهاً فورياً ويمكنك قبول الطلب بضغطة واحدة من التطبيق.",
    simplifiedPaymentsTitle: "دفع مبسط",
    simplifiedPaymentsDesc: "عرض سعر، دفع آمن.",
    integratedProToolsTitle: "أدوات احترافية مدمجة",
    integratedProToolsDesc: "تاريخ التدخلات، صور، توقيع العميل وملاحظات.",
    transparentCommissionTitle: "عمولة شفافة",
    transparentCommissionDesc:
      "لا مفاجآت: نموذج واضح، بدون رسوم خفية. إلغاء حر.",
    dedicatedSupportTitle: "دعم مخصص",
    dedicatedSupportDesc: "دعم عبر الدردشة/البريد الإلكتروني للشركاء.",
    proStep1Title: "التسجيل",
    proStep1Desc: "أنشئ حسابك في رائدين برو وأرسل مستنداتك.",
    proStep2Title: "التحقق",
    proStep2Desc: "نقوم بمراجعة معلوماتك، التأمين والتصاريح.",
    proStep3Title: "استلام المهام",
    proStep3Desc: "فعّل حسابك وابدأ بقبول الطلبات القريبة.",
    proStep4Title: "التدخل والفاتورة",
    proStep4Desc: "نفذ المهمة، أكد الدفع.",
    prerequisitesTitle: "المتطلبات للانضمام  ",
    prerequisite1: "شركة مسجلة وأوراق هوية سارية",
    prerequisite2: "تأمين مهني  ساري",
    prerequisite3: "مركبة تدخل ومعدات مطابقة للمعايير",
    prerequisite4: "الالتزام بقواعد السلامة والممارسات الجيدة",
    prerequisite5: "تحديد منطقة التغطية والتوفر",
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;
