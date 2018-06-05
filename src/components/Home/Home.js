// @flow

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Helmet from 'react-helmet';
import AppFooter from './Footer';
import Flask from './Flask';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Check from '@material-ui/icons/Check';
import Timer from '@material-ui/icons/Timer';
import InfiniteArticles from '../Articles/MUiArticles';


import {description} from '../App/menu';

import styles from './styles';

const ltitle = 'Программирование бизнеса';

class PageHome extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.tags = [];
    this.tagList = [];
    this.tagFilter = [];
  }

  shouldComponentUpdate({complete_loaded}) {
    const {tagList, tagFilter} = this;
    if(!tagFilter.length && complete_loaded) {
      tagFilter.push($p.cat.tags_category.predefined('news'));
      $p.cat.tags.find_rows({category: {in: tagFilter}}, (tag) => tagList.push(tag));
    }
    return true;
  }

  render() {
    const {classes, handleIfaceState, handleNavigate, title, match, location} = this.props;
    const {tags, tagList, tagFilter} = this;

    if(title != ltitle) {
      handleIfaceState({
        component: '',
        name: 'title',
        value: ltitle,
      });
    }

    return (
      <div className={classes.root}>

        <Helmet title={ltitle}>
          <meta name="description" content={description} />
        </Helmet>

        <Grid container className={classes.hero} spacing={8}>

          <Grid item sm={12} lg={5}>
            <Grid container alignItems="stretch" direction="column" justify="space-around">

              <Grid item>
                <Grid container className={classes.menu} spacing={16} wrap="nowrap" onClick={() => handleNavigate('/articles/')}>
                  <Hidden smDown><Grid item xs={1}/></Hidden>
                  <Grid item>
                    <LibraryBooks alt="Статьи" className={classes.logo} color="disabled"/>
                  </Grid>
                  <Grid item className={classes.content}>
                    <Typography variant="headline" component="h2">Статьи</Typography>
                    <Typography color="textSecondary">
                      Методические материалы, кейсы и технический блог
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container className={classes.menu} spacing={16} wrap="nowrap" onClick={() => handleNavigate('/articles/flowcon-readme')}>
                  <Hidden smDown><Grid item xs={1}/></Hidden>
                  <Grid item>
                    <Flask alt="Flowcon Logo" className={classes.logo} color="disabled"/>
                  </Grid>
                  <Grid item className={classes.content}>
                    <Typography variant="headline" component="h2">Flowcon</Typography>
                    <Typography color="textSecondary">
                      Программно-методический комплекс для управления потоками задач
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container className={classes.menu} spacing={16} wrap="nowrap" onClick={() => handleNavigate('/articles/check_data')}>
                  <Hidden smDown><Grid item xs={1}/></Hidden>
                  <Grid item>
                    <Check alt="Проверка данных" className={classes.logo} color="disabled"/>
                  </Grid>
                  <Grid item className={classes.content}>
                    <Typography variant="headline" component="h2">Проверка данных</Typography>
                    <Typography color="textSecondary">
                      Библиотека алгоритмов
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container className={classes.menu} spacing={16} wrap="nowrap" onClick={() => handleNavigate('/planing/')}>
                  <Hidden smDown><Grid item xs={1}/></Hidden>
                  <Grid item>
                    <Timer alt="Планирование" className={classes.logo} color="disabled"/>
                  </Grid>
                  <Grid item className={classes.content}>
                    <Typography variant="headline" component="h2">Планирование ресурсов</Typography>
                    <Typography color="textSecondary">
                      Простое решение сложной проблемы
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={12} lg={7}>
            <Grid container alignItems="stretch" direction="column" justify="flex-start" className={classes.news}>
              <Grid item>
                <Grid container spacing={16} wrap="nowrap">
                  <Hidden smDown><Grid item xs={1}/></Hidden>
                  <Grid item>
                    <Typography  variant="headline" component="h3">Новости</Typography>
                    {
                      tagFilter.length ?
                        <InfiniteArticles news tags={tags} tagList={tagList} match={match} location={location} handleNavigate={handleNavigate}/>
                        :
                        <Typography>Загрузка...</Typography>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>


        <AppFooter/>
      </div>
    );
  }
}

PageHome.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handleNavigate: PropTypes.func.isRequired,
  handleIfaceState: PropTypes.func.isRequired,
  complete_loaded: PropTypes.bool.isRequired,
};

export default withStyles(styles)(PageHome);
