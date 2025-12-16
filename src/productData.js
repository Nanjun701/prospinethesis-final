const getImagePath = (id, type) => `/images/${id}-${type}.JPG`;

export const products = [
  {
    id: 1,
    front: {
      disorder: "S-shaped Scoliosis X",
      tag: "Post Moderate",
      symptoms: "Body imbalance left-right, decreased stability.",
      cause: "Long-term habit of crossing legs.",
      problem: "Unable to squat stably to feed your pet.",
      image: getImagePath(1, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Body Balance Vest",
      tag: "Free Squat",
      desc: "This product achieves balance for an inherently unbalanced body by automatically applying unequal forces on both sides.",
      image: getImagePath(1, "b")
    }
  },
  {
    id: 2,
    front: {
      disorder: "Spinal Stiffness",
      tag: "Post Moderate",
      symptoms: "Limited spinal mobility, making bending forward and turning difficult.",
      cause: "Prolonged sitting and lack of stretching.",
      problem: "Inability to turn around for group discussions.",
      image: getImagePath(2, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Back Communication Pack",
      tag: "Communicate Without Turning Around",
      desc: "This product transmits the user's voice and facial expressions to a screen behind them via a camera and microphone, with adjustable angles to suit needs.",
      image: getImagePath(2, "b")
    }
  },
  {
    id: 3,
    front: {
      disorder: "C-shaped Scoliosis",
      tag: "Post Mild",
      symptoms: "The spine curves to one side, causing the body to lean.",
      cause: "Prolonged sitting in a one-sided posture while using a computer.",
      problem: "Difficulty walking in a straight line across the street.",
      image: getImagePath(3, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Walking Straight Leg Support",
      tag: "Safe Road Crossing",
      desc: "This product guides legs to walk in a straight line by applying force to both legs and stabilizing leg bones and muscles.",
      image: getImagePath(3, "b")
    }
  },
  {
    id: 4,
    front: {
      disorder: "Pelvic Obliquity",
      tag: "Post Mild",
      symptoms: "One side of the pelvis is elevated, causing leg length discrepancy.",
      cause: "Significant misalignment between the screen and seat position.",
      problem: "Prone to missing steps when descending stairs.",
      image: getImagePath(4, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Anti-Tripping Pant Cuffs",
      tag: "Walk Stairs with Confidence",
      desc: "This product automatically adjusts its thickness to balance the height difference between the user’s legs, providing stable support and preventing missteps while walking or climbing stairs.",
      image: getImagePath(4, "b")
    }
  },
  {
    id: 5,
    front: {
      disorder: "Thoracic Hyperkyphosis",
      tag: "Post Severe",
      symptoms: "Significant thoracic kyphosis, difficulty lifting head.",
      cause: "Screen positioned too low.",
      problem: "Unable to see the kite in the sky.",
      image: getImagePath(5, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Sky-Eye Glasses",
      tag: "See the Sky Without Looking Up",
      desc: "This product uses refraction and projection to let users view the sky without lifting their heads. The side handle allows easy adjustment of the Sky-Eye viewing angle.",
      image: getImagePath(5, "b")
    }
  },
  {
    id: 6,
    front: {
      disorder: "Forward Head Posture",
      tag: "Post Moderate",
      symptoms: "Forward head tilt, prominent occipital bone.",
      cause: "Prolonged downward gaze at mobile devices.",
      problem: "Ill-fitting outerwear, difficulty keeping upper body warm.",
      image: getImagePath(6, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Universal Waist Warmer",
      tag: "Fills the Gaps and Locks in Heat",
      desc: "This product connects seamlessly with various fabrics and provides intelligent heating to keep the waist warm, especially in areas that cannot be covered or insulated effectively.",
      image: getImagePath(6, "b")
    }
  },
  {
    id: 7,
    front: {
      disorder: "Lumbar Flexion Dysfunction",
      tag: "Post Mild",
      symptoms: "Inability to stand fully upright, resulting in an overall shorter appearance.",
      cause: "Office desk and study desk are too low.",
      problem: "Inability to reach ice cream from the top shelf of the refrigerator.",
      image: getImagePath(7, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Extended Reach Gloves",
      tag: "Effortlessly Access Hard-to-Reach Heights",
      desc: "This product uses synchronized interaction between the main glove and the extension glove to effectively lengthen the user’s reach, allowing them to grab items positioned high above.",
      image: getImagePath(7, "b")
    }
  },
  {
    id: 8,
    front: {
      disorder: "Posterior Pelvic Tilt",
      tag: "Post Moderate",
      symptoms: "Pelvic posterior rotation, lumbar spine straightening.",
      cause: "Slumped sitting posture, weak core muscles.",
      problem: "Difficulty putting on shoes.",
      image: getImagePath(8, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Automatic On-Off Shoes",
      tag: "A Hands-Free Way to Wear Your Shoes",
      desc: "This product uses an intelligent zipper system that automates the entire wearing and removing process—making it as simple as pressing a button on the shoe.",
      image: getImagePath(8, "b")
    }
  },
  {
    id: 9,
    front: {
      disorder: "Anterior Pelvic Tilt",
      tag: "Post Severe",
      symptoms: "Noticeable anterior pelvic tilt, creating a “false butt lift.”",
      cause: "Using the toilet while leaning on legs to play with phone.",
      problem: "No chair backrest provides adequate support.",
      image: getImagePath(9, "f"),
      instructionImage: "/images/[id]-.png"
    },
    back: {
      name: "Front Support Backrest",
      tag: "Support Your Upper Body from the Front",
      desc: "This product uses adjustable high-tech springs to support a collapsing upper body from the front, ensuring that users can still enjoy the full comfort and function of their seat.",
      image: getImagePath(9, "b")
    }
  }
];
