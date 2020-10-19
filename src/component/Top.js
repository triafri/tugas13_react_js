import React from 'react';
import { Grid, List, Placeholder, Segment, Divider, Header, Icon, Button, Search } from 'semantic-ui-react';

function Top() {
    return (
        <>
            <Segment placeholder style={{ marginTop: '10px' }}>
            <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>

                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='search' />
                            Cari Dokumen
                        </Header>
                        <Search placeholder='Search Document...' />
                    </Grid.Column>

                    <Grid.Column>
                        <Header icon>
                            <Icon name='file pdf outline' />
                            Tambah Dokumen Baru
                        </Header>
                        <Button primary>Create Document</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
            <Grid style={{ marginTop: '10px' }}>
                <Grid.Column width={5}>
                    <Segment raised>
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium' />
                                <Placeholder.Line length='short' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment raised>
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium' />
                                <Placeholder.Line length='short' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={3}>
                    <h3>Website Terkait</h3>
                    <List>
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                                <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">Google</a>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">Facebook</a>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                                <a href='https://react.semantic-ui.com/' target="_blank" rel="noopener noreferrer">Semantic UI</a>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                                <a href='https://niomic.com/'>NIOMIC</a>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                                <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">React</a>
                            </List.Content>
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid>
        </>
    )
}


export default Top;