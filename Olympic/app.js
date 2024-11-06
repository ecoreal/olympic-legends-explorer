const athletesData = [
    { id: 1, name: '运动员1', sport: '田径', country: '中国', year: '2020', image: 'path/to/image1.jpg', description: '运动员1的详细信息' },
    { id: 2, name: '运动员2', sport: '游泳', country: '美国', year: '2016', image: 'path/to/image2.jpg', description: '运动员2的详细信息' },
    { id: 3, name: '运动员3', sport: '篮球', country: '西班牙', year: '2012', image: 'path/to/image3.jpg', description: '运动员3的详细信息' },
    { id: 4, name: '运动员4', sport: '足球', country: '巴西', year: '2008', image: 'path/to/image4.jpg', description: '运动员4的详细信息' },
    { id: 5, name: '运动员5', sport: '网球', country: '瑞士', year: '2004', image: 'path/to/image5.jpg', description: '运动员5的详细信息' },
    // 添加更多运动员数据
  ];
  
  const app = new Vue({
    el: '#app',
    data: {
      searchQuery: '',
      selectedSport: '',
      selectedCountry: '',
      selectedYear: '',
      athletes: athletesData,
      currentPage: 1,
      itemsPerPage: 5,
      showModal: false,
      selectedAthlete: null
    },
    computed: {
      filteredAthletes() {
        return this.athletes.filter(athlete => {
          return (!this.searchQuery || athlete.name.includes(this.searchQuery)) &&
                 (!this.selectedSport || athlete.sport === this.selectedSport) &&
                 (!this.selectedCountry || athlete.country === this.selectedCountry) &&
                 (!this.selectedYear || athlete.year === this.selectedYear);
        });
      },
      paginatedAthletes() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredAthletes.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.filteredAthletes.length / this.itemsPerPage);
      },
      sports() {
        return [...new Set(this.athletes.map(athlete => athlete.sport))];
      },
      countries() {
        return [...new Set(this.athletes.map(athlete => athlete.country))];
      },
      years() {
        return [...new Set(this.athletes.map(athlete => athlete.year))];
      }
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      openModal(athlete) {
        this.selectedAthlete = athlete;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedAthlete = null;
      },
      hoverCard(event) {
        event.currentTarget.style.transform = 'translateY(-10px)';
        event.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
      },
      leaveCard(event) {
        event.currentTarget.style.transform = 'translateY(0)';
        event.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
      }
    }
  });