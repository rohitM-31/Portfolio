
function SocialLinks() {
  return (
    <div className="container text-center my-5" id="socials"> {/* <-- FIXED HERE */}
      <h2 className="mb-4">Social Links</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://www.linkedin.com/in/moka-rohit/"
              className="btn btn-outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MokaRohit-1274"
              className="btn btn-outline-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/21pa1a1274/"
              className="btn btn-outline-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            <a
              href="https://www.hackerrank.com/profile/21pa1a1274"
              className="btn btn-outline-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackerRank
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/21pa1a4ekc/"
              className="btn btn-outline-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeeksforGeeks
            </a>
            <a
              href="https://www.naukri.com/code360/profile/ROHITU"
              className="btn btn-outline-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code360 (Naukri)
            </a>
            <a
              href="https://takeuforward.org/profile/21pa1a1274@vishnu.edu.in"
              className="btn btn-outline-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              takeuforward
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SocialLinks;