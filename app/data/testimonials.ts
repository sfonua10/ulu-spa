export interface Testimonial {
  id: number
  name: string
  content: string
  rating: number
  initials: string
  timeAgo: string
  avatarColor: string
  avatarImage?: string
  googleUrl: string
  reviewCount?: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Tia Joaquin',
    content: 'Ulu Spa was amazing. The hair treatment was very relaxing and the service was top notch. The space is beautiful and peaceful. Definitely going back and telling friends and family.',
    rating: 5,
    initials: 'TJ',
    timeAgo: '3 days ago',
    avatarColor: 'from-pink-400 to-pink-500',
    googleUrl: 'https://www.google.com/maps/contrib/104690577743039956370/reviews'
  },
  {
    id: 2,
    name: 'Tai Nuusa',
    content: 'Loved ulu spa so much! I brought my SIL with me to experience this for the first time and it was soooo good! The owners were so nice and took great care of us!',
    rating: 5,
    initials: 'TN',
    timeAgo: '4 days ago',
    avatarColor: 'from-blue-400 to-blue-500',
    avatarImage: '/images/avatars/tai-nuusa-image.png',
    googleUrl: 'https://www.google.com/maps/contrib/115414944323774604826/reviews',
    reviewCount: 7
  },
  {
    id: 3,
    name: 'Devan and Brit',
    content: 'Super relaxing, calming and really felt well taken care of! Head and scalp felt amazing afterwards! Wonderful experience! I will be coming back!',
    rating: 5,
    initials: 'DB',
    timeAgo: '14 hours ago',
    avatarColor: 'from-purple-400 to-purple-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 4,
    name: 'Jackie Wright',
    content: 'Amazing!!! Indulgent & worth the self care!! Loved, loved, loved this!!!! Great price and incredible experience.',
    rating: 5,
    initials: 'JW',
    timeAgo: 'a week ago',
    avatarColor: 'from-green-400 to-green-500',
    googleUrl: 'https://www.google.com/maps/contrib/116909416203419356592/reviews'
  },
  {
    id: 5,
    name: 'Mmarie Enoch',
    content: 'My daughter and I went for a 30 min express and it was soooo nice! Very peaceful, relaxing, and just a nice way to start the weekend. I will be going back for a longer session next time. The staff was very pleasant and welcoming.',
    rating: 5,
    initials: 'ME',
    timeAgo: '2 weeks ago',
    avatarColor: 'from-teal-400 to-teal-500',
    avatarImage: '/images/avatars/Mmarie-enoch.png',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 6,
    name: 'Katie Bates',
    content: 'Amazing relaxing head spa experience and my hair was silky soft afterwards. My only recommendation to them is to heat the room a little more because even with a blanket it was kind of chilly.',
    rating: 5,
    initials: 'KB',
    timeAgo: '2 weeks ago',
    avatarColor: 'from-indigo-400 to-indigo-500',
    avatarImage: '/images/avatars/katie-bates.png',
    googleUrl: 'https://www.google.com/maps/contrib/117333832981530617738/reviews'
  },
  {
    id: 7,
    name: 'Kacey Thorne',
    content: 'This was the most relaxing spa experience I have ever had. I am going to be signing up for a membership and get my girlfriends to go too. It was incredible.',
    rating: 5,
    initials: 'KT',
    timeAgo: '2 weeks ago',
    avatarColor: 'from-orange-400 to-orange-500',
    googleUrl: 'https://www.google.com/maps/contrib/114717175870844772954/reviews'
  },
  {
    id: 8,
    name: 'Abigail Danielson',
    content: 'What an amazing experience from start to finish. The staff were so friendly, and professional. The head spa part was phenomenal; so relaxing and calming! I will definitely be back, and will be bringing all my friends and family. 10/10 will always recommend!!!',
    rating: 5,
    initials: 'AD',
    timeAgo: '3 weeks ago',
    avatarColor: 'from-red-400 to-red-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 9,
    name: 'Noemi Castillo',
    content: 'Will be back for sure! Great service, quality attention and such a genuine experience.',
    rating: 5,
    initials: 'NC',
    timeAgo: '4 weeks ago',
    avatarColor: 'from-cyan-400 to-cyan-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 10,
    name: 'Taylen Bloomfield',
    content: 'This place was AMAZING! My boyfriend and I went because I had a gift card and we are forever hooked. Seriously you don\'t realize how bad you need it till you get it done! The owners were so kind and welcoming — you can tell they really care. The vibe was this perfect mix of tropical relaxation and luxury spa.',
    rating: 5,
    initials: 'TB',
    timeAgo: 'a week ago',
    avatarColor: 'from-emerald-400 to-emerald-500',
    avatarImage: '/images/avatars/taylen-bloomfield.png',
    googleUrl: 'https://www.google.com/maps/contrib/111298757679635485738/reviews'
  },
  {
    id: 11,
    name: 'M Robison',
    content: 'An AMAZING EXPERIENCE! I can\'t wait to go back.',
    rating: 5,
    initials: 'MR',
    timeAgo: '4 weeks ago',
    avatarColor: 'from-fuchsia-400 to-fuchsia-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 12,
    name: 'Gracie Dudley',
    content: 'I love ULU Spa!',
    rating: 5,
    initials: 'GD',
    timeAgo: 'a month ago',
    avatarColor: 'from-rose-400 to-rose-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 13,
    name: 'Trisha Jensen',
    content: 'Grace was amazing, this is one of the most relaxing things I have done. I will definitely return!',
    rating: 5,
    initials: 'TJ',
    timeAgo: 'a month ago',
    avatarColor: 'from-amber-400 to-amber-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 14,
    name: 'Rachelle Fawcett',
    content: 'What a great experience! Staff is amazing, service was luxurious. Will be back!',
    rating: 5,
    initials: 'RF',
    timeAgo: 'a month ago',
    avatarColor: 'from-lime-400 to-lime-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 15,
    name: 'Serena',
    content: 'Loved it!',
    rating: 5,
    initials: 'S',
    timeAgo: 'a month ago',
    avatarColor: 'from-sky-400 to-sky-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 16,
    name: 'Line Hafoka',
    content: 'Seriously this was the best spa experience I ever had! The setting was beautiful and relaxing, the head massage and treatment was out of this world, and the overall service was just incredible. Will definitely be coming back!',
    rating: 5,
    initials: 'LH',
    timeAgo: 'a month ago',
    avatarColor: 'from-violet-400 to-violet-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 17,
    name: 'Jordan Warner',
    content: 'Amazing! Everyone was so friendly! My wife and I were treated so well! So relaxing can\'t wait to recommend to all of our friends! It\'s a must, go!',
    rating: 5,
    initials: 'JW',
    timeAgo: 'a month ago',
    avatarColor: 'from-pink-500 to-pink-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 6
  },
  {
    id: 18,
    name: 'Andrea Ingersoll',
    content: 'Amazing!!! I enjoyed every minute! Perfect pressure and so relaxing! My hair feels amazing. The blowout after was a cherry on top of a 90 min pampering!',
    rating: 5,
    initials: 'AI',
    timeAgo: 'a month ago',
    avatarColor: 'from-blue-500 to-blue-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 7
  },
  {
    id: 19,
    name: 'Greice Beesley',
    content: 'Jacee did such a great job, I Loved every minute of it!! It was so relaxing, can\'t wait to go back !!! Beautiful place !!',
    rating: 5,
    initials: 'GB',
    timeAgo: 'a month ago',
    avatarColor: 'from-purple-500 to-purple-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 12
  },
  {
    id: 20,
    name: 'Kylie Childs',
    content: 'Ulu was the most magical experience! My scalp has never felt healthier and my hair is so soft. I also loved that they actually spend the entire time you book for on your treatment! You will love it here.',
    rating: 5,
    initials: 'KC',
    timeAgo: 'a month ago',
    avatarColor: 'from-green-500 to-green-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 10
  },
  {
    id: 21,
    name: 'Rylie Perry',
    content: 'Wow, Ulu spa performed an incredible service! This is just what I needed to relax and escape my migraines. Jobi really made sure to make me feel comfortable and relaxed. The massaging, hair washing, hot stones, and essential oils were all so relaxing. Jobi even ended it off with a blow dry so I didn\'t have to leave with wet hair!',
    rating: 5,
    initials: 'RP',
    timeAgo: 'a month ago',
    avatarColor: 'from-teal-500 to-teal-600',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 22,
    name: 'Lahaina Tanuvasa',
    content: 'We had such an amazing experience at Ulu Spa! My cousin, brother, and I booked a last-minute appointment on a Thursday evening and the staff went above and beyond to accommodate us. The scalp treatments were incredible, and the massages were truly the highlight. Their customer service is absolutely top-notch.',
    rating: 5,
    initials: 'LT',
    timeAgo: 'a month ago',
    avatarColor: 'from-indigo-500 to-indigo-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 7
  },
  {
    id: 23,
    name: 'Brooke Anderson',
    content: 'Head spa massage was sooo great. Guiliana was so friendly and did a wonderful service! She even figured out my technological issues I had when booking! My hair smelt sooo great and was silky after. Thanks!!',
    rating: 5,
    initials: 'BA',
    timeAgo: 'a month ago',
    avatarColor: 'from-orange-500 to-orange-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 24
  },
  {
    id: 24,
    name: 'Kiarra Murillo',
    content: 'Came here for my birthday, and it was amazing! I saw Giuliana and I will definitely be booking with her again! I had the 75 minute treatment and it flew by way too fast. Definitely will be coming back for a longer service!',
    rating: 5,
    initials: 'KM',
    timeAgo: '2 months ago',
    avatarColor: 'from-red-500 to-red-600',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 25,
    name: 'Louise Kuaea',
    content: 'I\'m very much an energy person and this space just felt amazing the moment I walked in. The atmosphere is calm, beautiful, and full of good vibes. The owner went out of her way to make sure I had a wonderful experience, even giving me a holiday discount and complimentary blowout.',
    rating: 5,
    initials: 'LK',
    timeAgo: '2 months ago',
    avatarColor: 'from-cyan-500 to-cyan-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 10
  },
  {
    id: 26,
    name: 'Ember Johnson',
    content: 'If I could give this place 100 stars I would. Honestly a SPIRITUAL experience. I came out of there not even remembering my name. I looooooved this. And I want to do it at least once a week. GAWL. If you are on the fence, just book it. You won\'t regret it. Staff was INCREDIBLE. Very kind, calm, and I loved them so much!!!',
    rating: 5,
    initials: 'EJ',
    timeAgo: '2 months ago',
    avatarColor: 'from-fuchsia-500 to-fuchsia-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 5
  },
  {
    id: 27,
    name: 'Maren Oborn',
    content: 'My first time at Ulu Spa and it was everything. From the scents and sounds to the cleanliness—the experience was so calming and well thought out. I did the Ocean Ritual scalp and hair treatment plus a blowout. I have chronic headaches and TMJ, and this was one of the most relaxing, effective treatments I\'ve ever had.',
    rating: 5,
    initials: 'MO',
    timeAgo: '2 months ago',
    avatarColor: 'from-rose-500 to-rose-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 5
  },
  {
    id: 28,
    name: 'Juliet Greer',
    content: 'My head spa experience was nothing short of amazing. The ambiance was serene and welcoming, setting the tone for deep relaxation. The scalp massage was both therapeutic and soothing, easing away tension while stimulating circulation. The nourishing treatments left my kinky curly hair softer, shinier, and my scalp feeling rejuvenated.',
    rating: 5,
    initials: 'JG',
    timeAgo: '2 months ago',
    avatarColor: 'from-amber-500 to-amber-600',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 29,
    name: 'Taylor Hicks',
    content: 'Went for my birthday and had an amazing time! It was so tranquil and relaxing getting a scalp massage done. There was even a little letter board that said happy birthday when I walked into the room. Julianna was so kind and did exactly what I asked for, medium pressure when massaging and perfect water temp.',
    rating: 5,
    initials: 'TH',
    timeAgo: '2 months ago',
    avatarColor: 'from-lime-500 to-lime-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 9
  },
  {
    id: 30,
    name: 'Nuuuli Brown',
    content: 'My wife wanted to experience what she seen on TikTok for her birthday - so I booked us a couples massage. It was an amazing experience - very calm, relaxing atmosphere. The water therapy and massage is something everyone should try. My wife wants to go back for more - she was very happy and loved the whole experience.',
    rating: 5,
    initials: 'NB',
    timeAgo: '2 months ago',
    avatarColor: 'from-sky-500 to-sky-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 4
  },
  {
    id: 31,
    name: 'Elizabeth LeVan',
    content: 'What a unique and deeply relaxing experience! From the phonecall to set an appt to the actual service provider herself, it was just lovely. I called at 2:00 and by 3:30 I was in Heaven! I got the Royal Escape 90 min. Treatment and it was awesome. Head/scalp, décolletage (neck, upper chest and shoulders), feet, ankles, and calves and hands, wrists and forearms were all given so much love.',
    rating: 5,
    initials: 'EL',
    timeAgo: '2 months ago',
    avatarColor: 'from-violet-500 to-violet-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 5
  },
  {
    id: 32,
    name: 'Marissa Empey',
    content: 'I had an amazing time at ULU. So relaxing and totally worth it. Can\'t wait to go back! The service and ambiance were perfectly lovely.',
    rating: 5,
    initials: 'ME',
    timeAgo: '2 months ago',
    avatarColor: 'from-pink-600 to-rose-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 8
  },
  {
    id: 33,
    name: 'Annie Oswald',
    content: 'Scalp massage with hot stone shoulder massage add/on. Highly recommend! I\'ll go back for a foot massage. Great service and ambiance.',
    rating: 5,
    initials: 'AO',
    timeAgo: '2 months ago',
    avatarColor: 'from-blue-600 to-indigo-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 5
  },
  {
    id: 34,
    name: 'Kayla Fanene',
    content: '10/10',
    rating: 5,
    initials: 'KF',
    timeAgo: '2 months ago',
    avatarColor: 'from-purple-600 to-fuchsia-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 5
  },
  {
    id: 35,
    name: 'Becky Madigan',
    content: 'Amazing!',
    rating: 5,
    initials: 'BM',
    timeAgo: '2 months ago',
    avatarColor: 'from-green-600 to-emerald-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 8
  },
  {
    id: 36,
    name: 'arale napoles',
    content: 'Oh my God it was a wonderful experience I recommend it if you want to pamper yourself This is the perfect place',
    rating: 5,
    initials: 'AN',
    timeAgo: '2 months ago',
    avatarColor: 'from-teal-600 to-cyan-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 10
  },
  {
    id: 37,
    name: 'James Heuett',
    content: 'Amazing experiance. I got the men\'s treatment, and as a bald guy with a beard let me tell you it was amazing. Super relaxing! Beyond impressed. Will be going back.',
    rating: 5,
    initials: 'JH',
    timeAgo: '2 months ago',
    avatarColor: 'from-indigo-600 to-purple-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 9
  },
  {
    id: 38,
    name: 'Tamarina',
    content: 'The staff was so warm and friendly. The service was SUPER relaxing. I had my scalp treated/massaged. My service also included neck/chest, hands, and feet. Check them out!',
    rating: 5,
    initials: 'T',
    timeAgo: '2 months ago',
    avatarColor: 'from-orange-600 to-amber-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 39,
    name: 'Heather Johnson',
    content: 'We had the most relaxing experience at Ulu! Enoch & Jobi are so great at inviting you in and helping you feel right at home. All of our group had wonderful treatments. We will definitely be back! Thank you to the whole team, one of whom made accommodations for our last minute schedule shift, and was so kind about it!',
    rating: 5,
    initials: 'HJ',
    timeAgo: '2 months ago',
    avatarColor: 'from-red-600 to-rose-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 4
  },
  {
    id: 40,
    name: 'Cindi Ingersoll',
    content: 'Beautiful, relaxing, calming experience! So professional from the booking through the end. If you need to feel pampered Ulu is the place to go!',
    rating: 5,
    initials: 'CI',
    timeAgo: '2 months ago',
    avatarColor: 'from-cyan-600 to-sky-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 12
  },
  {
    id: 41,
    name: 'Inaya Paopao',
    content: 'Loved the whole experience! Did a couple massage with my husband and we both came out feeling soooo relaxed. Definitely would come back!',
    rating: 5,
    initials: 'IP',
    timeAgo: '3 months ago',
    avatarColor: 'from-fuchsia-600 to-pink-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 3
  },
  {
    id: 42,
    name: 'Tia Butler',
    content: 'Such an incredible experience at Ulu! The ambience is calm and elegant and I very much appreciated the attentiveness of my service provider (Grace). I highly recommend the Royal Escape package for the full luxury experience. Every detail was thoughtfully curated - from the aromatherapy to the soothing head massage.',
    rating: 5,
    initials: 'TB',
    timeAgo: '3 months ago',
    avatarColor: 'from-rose-600 to-pink-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 4
  },
  {
    id: 43,
    name: 'Lenny Gray',
    content: 'This place is amazing! My wife and I each booked a 1-hour session and it was total relaxation! The service here are unique and nothing like I\'ve experienced before. It was the quickest hour of my life, we\'ll definitely be back!',
    rating: 5,
    initials: 'LG',
    timeAgo: '3 months ago',
    avatarColor: 'from-amber-600 to-orange-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 23
  },
  {
    id: 44,
    name: 'Katelyn',
    content: 'The most amazing experience both physically and emotionally. Heaven on Earth frfr. Also Jobi was amazing!! Took her time and treated me like family! Love love love it hereeeeee!',
    rating: 5,
    initials: 'K',
    timeAgo: '3 months ago',
    avatarColor: 'from-lime-600 to-green-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 45,
    name: 'Luna Ambar',
    content: 'It\'s very nice and professional, my experience was wonderful, they are kind and bilingual, I left refreshed and stress-free.',
    rating: 5,
    initials: 'LA',
    timeAgo: '3 months ago',
    avatarColor: 'from-sky-600 to-blue-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 46,
    name: 'Charlyne Achermann',
    content: 'Jobi Niu did a fantastic job. Definitely going back.',
    rating: 5,
    initials: 'CA',
    timeAgo: '3 months ago',
    avatarColor: 'from-violet-600 to-purple-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 4
  },
  {
    id: 47,
    name: 'Stephani A',
    content: 'Thank you to Grace for a beautiful experience! I would recommend the amazing services.',
    rating: 5,
    initials: 'SA',
    timeAgo: '3 months ago',
    avatarColor: 'from-pink-500 to-fuchsia-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 3
  },
  {
    id: 48,
    name: 'Guadalupe',
    content: 'Clean, good service, beautiful atmosphere.',
    rating: 5,
    initials: 'G',
    timeAgo: '3 months ago',
    avatarColor: 'from-blue-500 to-purple-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 12
  },
  {
    id: 49,
    name: 'Michael Reed',
    content: 'Customer service was very friendly and the service was great my scalp and beard feel very clean and less itchy. Will definitely be back',
    rating: 5,
    initials: 'MR',
    timeAgo: '3 months ago',
    avatarColor: 'from-purple-500 to-indigo-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 6
  },
  {
    id: 50,
    name: 'Tovale T',
    content: '10/10 Absolutely AMAZING! I had my first visit to ULU Head and Scalp Spa and it was incredible! From the moment I walked in, I felt completely relaxed—the space has such a luxe, calming vibe. The staff were so welcoming and made me feel right at home. The neck and shoulder massage was amazing—just the right pressure to release all the tension. But the real highlight was the scalp massage… hands down the best!',
    rating: 5,
    initials: 'TT',
    timeAgo: '3 months ago',
    avatarColor: 'from-green-500 to-teal-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 6
  },
  {
    id: 51,
    name: 'Jacee Warnick',
    content: 'I recently had my first head spa treatment and it was incredible! The deep-cleansing shampoo and exfoliation completely refreshed my scalp, and the massage was very relaxing! They used essential oils and hot towels which helped relieve any tension I had. My scalp feels lighter and healthier after! And I even slept better that night, thanks to how relaxed I felt.',
    rating: 5,
    initials: 'JW',
    timeAgo: '3 months ago',
    avatarColor: 'from-teal-500 to-cyan-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 5
  },
  {
    id: 52,
    name: 'Mayette Pahulu',
    content: '10/10 recommend!! All of the employees are very sweet and made our experience there 10 times better. That was the most relaxed i\'ve felt in a while and my hair has never been softer!',
    rating: 5,
    initials: 'MP',
    timeAgo: '3 months ago',
    avatarColor: 'from-indigo-500 to-violet-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 3
  },
  {
    id: 53,
    name: 'Jenny schmitt',
    content: 'Visiting Ulu spa unlocked a level of relaxation I didn\'t know I had. It was such an incredible experience. I felt comfortable, relaxed and taken care of. The atmosphere was calming and welcoming. It\'s a great place to unwind and treat yourself',
    rating: 5,
    initials: 'JS',
    timeAgo: '3 months ago',
    avatarColor: 'from-orange-500 to-red-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 4
  },
  {
    id: 54,
    name: 'Carly Cabana',
    content: 'I had such a great time at ULU! It was one of the most unique and relaxing experiences I\'ve ever had before. I loved absolutely every minute of it. The head massage and scalp treatments made my hair feel so soft afterwards. The halo rinse was also new to me and felt amazing.',
    rating: 5,
    initials: 'CC',
    timeAgo: '3 months ago',
    avatarColor: 'from-cyan-500 to-blue-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 55,
    name: 'Misty Halatokoua',
    content: 'Went here on 8/7/2025 for my birthday and they did not disappoint! As soon as I set foot into ULU the whole ambience is tranquil it sets the tone to prepare you to relax. I\'m not going to lie I was nervous at first because I have super curly hair and I am tender headed but Jobi did an amazing job I was so relaxed and comfortable the whole time.',
    rating: 5,
    initials: 'MH',
    timeAgo: '3 months ago',
    avatarColor: 'from-fuchsia-500 to-pink-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 10
  },
  {
    id: 56,
    name: 'Maata Stevens',
    content: 'I felt so relaxed, I will definitely be adding Ulu Spa to a weekly self-care routine. The customer service was 10/10! The team was warm and professional. The space is very clean and aesthetically pleasing. Highly recommend it!',
    rating: 5,
    initials: 'MS',
    timeAgo: '4 months ago',
    avatarColor: 'from-rose-500 to-pink-500',
    googleUrl: 'https://www.google.com/maps'
  },
  {
    id: 57,
    name: 'Stephanie Finau',
    content: 'Didn\'t know what to expect. It was AHHMAZING! So relaxing and calming. I booked a 90 min session. From the scalp treatment, to the head massage, shoulder & arm massage, and foot Zone massage was fantastic. The employees and owners were so nice and love the vibe and esthetics of this business.',
    rating: 5,
    initials: 'SF',
    timeAgo: '4 months ago',
    avatarColor: 'from-amber-500 to-yellow-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 11
  },
  {
    id: 58,
    name: 'Siosifa Taiese',
    content: 'Ulu spa, worth every penny! It is an experience that no words can describe. It literally helps with your mental. It deserves a 10 star rating! Thanks Ulu spa!',
    rating: 5,
    initials: 'ST',
    timeAgo: '4 months ago',
    avatarColor: 'from-lime-500 to-green-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 12
  },
  {
    id: 59,
    name: 'JJ Melton',
    content: 'My wife got me this for Father\'s Day and it\'s one of the best gifts I\'ve ever gotten. Jobi and her team took great care of me and I\'ll definitely be back!',
    rating: 5,
    initials: 'JM',
    timeAgo: '4 months ago',
    avatarColor: 'from-sky-500 to-cyan-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 134
  },
  {
    id: 60,
    name: 'Janessa Koelliker',
    content: 'Phenomenal experience at ULU. They took such great care of me. I will be going back.',
    rating: 5,
    initials: 'JK',
    timeAgo: '4 months ago',
    avatarColor: 'from-violet-500 to-purple-500',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 25
  },
  {
    id: 61,
    name: 'Dakota Ashby',
    content: 'You don\'t realize how much you need this until you get it!!! Definitely coming back. The owner and his wife are awesome people!',
    rating: 5,
    initials: 'DA',
    timeAgo: '4 months ago',
    avatarColor: 'from-pink-600 to-rose-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 17
  },
  {
    id: 62,
    name: 'Sierra Erekson',
    content: 'Amazing experience and phenomenal service!',
    rating: 5,
    initials: 'SE',
    timeAgo: '4 months ago',
    avatarColor: 'from-blue-600 to-indigo-600',
    googleUrl: 'https://www.google.com/maps',
    reviewCount: 16
  },
  {
    id: 63,
    name: 'Not In Service. DND',
    content: 'My wife and I enjoyed the professional service there. There\'s nowhere in Utah that offers those luxury massage beds with a built-in head sinks that washes your head and gives you an high end feel. I thought I was in a Beverly Hills Spa in Utah. I give this place 5 stars. You won\'t be disappointed.',
    rating: 5,
    initials: 'NI',
    timeAgo: '4 months ago',
    avatarColor: 'from-purple-600 to-fuchsia-600',
    googleUrl: 'https://www.google.com/maps'
  }
]
