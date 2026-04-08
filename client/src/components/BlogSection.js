'use client';

export default function BlogSection() {
  const posts = [
    {
      title: 'बगलामुखी पूजा के चमत्कारी लाभ',
      excerpt: 'शत्रुओं पर विजय और कोर्ट कचहरी के कामों में सफलता के लिए माँ बगलामुखी की साधना सर्वश्रेष्ठ मानी गई है...',
      date: 'April 10, 2024',
      image: '/images/gallery2.png'
    },
    {
      title: 'कोर्ट केस में जीत कैसे पाएं?',
      excerpt: 'क्या आप सालों से कोर्ट केस से परेशान हैं? जानिए कैसे बगलामुखी अनुष्ठान आपकी कानूनी बाधाओं को दूर कर सकता है...',
      date: 'April 05, 2024',
      image: '/images/gallery1.png'
    },
    {
      title: 'नलखेड़ा मंदिर का इतिहास एवं महत्व',
      excerpt: 'नलखेड़ा (मध्य प्रदेश) स्थित प्राचीन मंदिर विश्व के सिद्ध पीठों में से एक है। यहाँ की गई पूजा का विशेष महत्व है...',
      date: 'March 28, 2024',
      image: '/images/hero.png'
    }
  ];

  const styles = {
    section: { background: 'var(--background)' },
    title: { textAlign: 'center', marginBottom: '60px' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    card: {
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      border: '1px solid var(--border)',
    },
    img: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      filter: 'brightness(0.7)',
    },
    content: {
      padding: '25px',
    },
    date: {
      fontSize: '0.75rem',
      color: 'var(--primary)',
      textTransform: 'uppercase',
      marginBottom: '10px',
      display: 'block',
    },
    postTitle: {
      fontSize: '1.2rem',
      marginBottom: '15px',
    },
    excerpt: {
      fontSize: '0.9rem',
      color: 'rgba(255,255,255,0.6)',
      lineHeight: '1.6',
    }
  };

  return (
    <section id="blog" style={styles.section}>
      <div className="container">
        <h2 style={styles.title}>Spiritual Knowledge (Blog)</h2>
        <div style={styles.grid}>
          {posts.map((post, i) => (
            <div key={i} className="glass-card" style={styles.card}>
              <img src={post.image} alt={post.title} style={styles.img} />
              <div style={styles.content}>
                <span style={styles.date}>{post.date}</span>
                <h3 style={styles.postTitle}>{post.title}</h3>
                <p style={styles.excerpt}>{post.excerpt}</p>
                <a href="#" style={{marginTop: '20px', display: 'inline-block', color: 'var(--primary)', fontWeight: 'bold'}}>Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
